import { useState, useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { TextInput } from '../Textinput';
import { TextArea } from '../TextArea';
import { DateInput } from '../DateInput';
import { Select } from '../Select';
import { Checkbox } from '../Checkbox';
import { Switcher } from '../Switcher';
import { Upload } from '../Upload';
import { iErrors, iVisit } from '../../types';

interface FormProps {
  updateData: (e: iVisit) => void;
}

export interface FormState {
  formData: iVisit;
  isSubmitDisabled: boolean;
  isInstantValidation: boolean;
  errors: iErrors;
}

const fileReader = new FileReader();
let fileSrc = '';

export const Form = (props: FormProps) => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [uploadBtnText, setUploadBtnText] = useState<string>('');
  const methods = useForm<iVisit>();

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    reset();
    setUploadBtnText('');
    setIsSubmitDisabled(true);
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<iVisit> = (data) => {
    const formatData = data;
    formatData.upload = fileSrc;
    formatData.date = new Date(data.date).toLocaleDateString();
    formatData.purpose = data.purpose ? 'Travel' : 'Business';
    props.updateData(formatData);
  };

  const handleFileChosen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    const files = e.currentTarget.files;
    setUploadBtnText(name.replace(/^.*[\\\/]/, ''));
    if (files) {
      fileReader.onloadend = () => {
        fileSrc = String(fileReader.result);
      };
      fileReader.readAsDataURL(files[0]);
    }
  };

  const handleFormChange = () => {
    setIsSubmitDisabled(false);
  };

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={handleSubmit(onSubmit)} onChange={handleFormChange}>
        <TextInput
          name="name"
          label="Your name:"
          placeholder="Enter your name"
          error={errors.name?.message}
        />
        <DateInput name="date" label="Date:" placeholder="Date" error={errors.date?.message} />
        <TextInput name="title" label="Title:" placeholder="Title" error={errors.title?.message} />
        <Select
          name="country"
          label="Country:"
          placeholder="Country"
          error={errors.country?.message}
        />
        <Checkbox name="alone" label="Alone" />
        <Switcher name="purpose" label="Purpose:" />
        <Upload
          name="upload"
          label="Upload a photo:"
          handleFileChosen={handleFileChosen}
          error={errors.upload?.message}
          btnText={uploadBtnText}
        />
        <TextArea
          name="description"
          label="Impression:"
          placeholder="Give a short description for your trip"
          error={errors.description?.message}
        />
        <button
          className="form__btn form__submit"
          type="submit"
          value="post"
          disabled={isSubmitDisabled}
        >
          Post
        </button>
      </form>
    </FormProvider>
  );
};
