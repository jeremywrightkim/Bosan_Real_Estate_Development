import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {  
  return (
    <form className="grid min-h-[10px] grid-cols-1 gap-y-4" method="POST">       
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
