import styles from '../MenuIcon/MenuIcon.module.css';

interface MenuIconProps {
  onClick: () => void;
}

export const MenuIcon: React.FC<MenuIconProps> = ({ onClick }) => {
  return (  
     <div className={styles.Menu} >
        <div className={styles.MenuIcon} onClick={onClick}/>
     </div>
  );
};

