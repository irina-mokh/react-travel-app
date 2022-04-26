import React, { useEffect } from 'react';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { TextInput } from '../Textinput';
import { TextArea } from '../TextArea';
import { DateInput } from '../DateInput';
import { Select } from '../Select';
import { Checkbox } from '../Checkbox';
import { Switcher } from '../Switcher';
import { Upload } from '../Upload';
import { iVisit, iFormData } from '../../types';
import { VisitsStore } from '../../store/visits';
import { useForm } from 'react-hook-form';
import { readFileAsync } from '../../utils';

const countries = [
  '',
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas (the)',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory (the)',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands (the)',
  'Central African Republic (the)',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands (the)',
  'Colombia',
  'Comoros (the)',
  'Congo (the Democratic Republic of the)',
  'Congo (the)',
  'Cook Islands (the)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  "Côte d'Ivoire",
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic (the)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (the) [Malvinas]',
  'Faroe Islands (the)',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories (the)',
  'Gabon',
  'Gambia (the)',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (the)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea (the Democratic People's Republic of)",
  'Korea (the Republic of)',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic (the)",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands (the)',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova (the Republic of)',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands (the)',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger (the)',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands (the)',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines (the)',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of North Macedonia',
  'Romania',
  'Russian Federation (the)',
  'Rwanda',
  'Réunion',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan (the)',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands (the)',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates (the)',
  'United Kingdom of Great Britain and Northern Ireland (the)',
  'United States Minor Outlying Islands (the)',
  'United States of America (the)',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Åland Islands',
];

const FORM_INITIAL = {
  name: '',
  title: '',
  date: '',
  description: '',
  country: '',
  purpose: '',
  alone: true,
  upload: null,
};

export const Form = () => {
  const {
    state: { isSubmitDisabled },
    dispatch,
  } = React.useContext(VisitsStore);

  let formData = FORM_INITIAL;
  if (typeof localStorage.getItem('form') === 'string') {
    formData = JSON.parse(localStorage.form);
  }
  const methods = useForm<iFormData>({
    defaultValues: formData,
  });
  const {
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const handleChange = async () => {
    const formData = await getFormData(watch());
    localStorage.setItem('form', JSON.stringify(formData));
    dispatch({ type: 'make submit active' });
  };

  const getFormData = async (data: iFormData) => {
    const { name, title, description, country, alone } = data;

    let fileSrc = '';
    if (data.upload && !localStorage.upload) {
      fileSrc = String(await readFileAsync(data.upload[0]));
      const text = (watch().upload as FileList)[0].name;
      dispatch({ type: 'change upload btn', payload: text });
    } else if (localStorage.form) {
      fileSrc = localStorage.form.upload;
    }
    const result: iVisit = {
      name,
      title,
      description,
      country,
      alone,
      upload: fileSrc,
      date: data.date == 'Invalid Date' ? '' : data.date,
      purpose: data.purpose ? 'Travel' : 'Business',
    };
    return result;
  };

  const onSubmit: SubmitHandler<iFormData> = async (data) => {
    const formData = await getFormData(data);
    dispatch({ type: 'add data', payload: formData });
  };

  return (
    <FormProvider {...methods}>
      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        onChange={handleChange}
        data-testid="visit-form"
      >
        <TextInput
          name="name"
          label="Your name:"
          placeholder="Enter your name"
          error={errors.name?.message}
        />
        <DateInput name="date" label="Date:" placeholder="Date" error={errors.date?.message} />
        <TextInput name="title" label="Title:" placeholder="Title" error={errors.title?.message} />
        <Select
          options={countries}
          name="country"
          label="Country:"
          placeholder="Country"
          error={errors.country?.message}
        />
        <Checkbox name="alone" label="Alone" />
        <Switcher name="purpose" label="Purpose:" />
        <Upload name="upload" label="Upload a photo:" error={errors.upload?.message} />
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
