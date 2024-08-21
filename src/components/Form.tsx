interface FormProps {
  children?: React.ReactNode;
  handleSubmit: any;
  className?: string;
}

export const Form = ({ children, handleSubmit, className }: FormProps) => {
  async function submit(event: any) {
    event.preventDefault();
    handleSubmit();
  }

  return (
    <form onSubmit={submit} className={className}>
      {children}
    </form>
  );
};
