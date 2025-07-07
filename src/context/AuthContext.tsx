// src/context/AuthContext.tsx

// 'React' больше не импортируем, а 'ReactNode' импортируем как тип
import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';

// 1. Определяем, как будет выглядеть наш контекст
interface AuthContextType {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

// 2. Создаем сам контекст с начальным "пустым" значением
const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {}, // Пустая функция-заглушка
});

// 3. Создаем компонент-ПРОВАЙДЕР. Он будет хранить состояние и предоставлять его всему приложению.
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  // 4. Эффект, который запускается ОДИН РАЗ при первой загрузке приложения
  useEffect(() => {
    // Проверяем, есть ли токен в хранилище
    const token = localStorage.getItem('authToken');
    
    // Если токен существует, значит, пользователь уже вошел
    if (token) {
      setIsAuth(true);
    }
  }, []); // Пустой массив зависимостей [] означает "запустить только при монтировании"

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// 5. Создаем кастомный хук для удобного доступа к контексту из любого компонента
export const useAuth = () => useContext(AuthContext);
