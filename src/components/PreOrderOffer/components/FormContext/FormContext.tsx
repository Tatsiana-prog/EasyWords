import React, { createContext, useState, useContext } from "react";

export interface FormData {
  name: string;
  email: string;
  tel?: string;
  tariff: string;
  option: string;
  textarea1: string;
  textarea2?: string;
  agreement: boolean;
}

interface FormContextType {
  formData: FormData | null;
  setFormData: (data: FormData) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData | null>(null);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
