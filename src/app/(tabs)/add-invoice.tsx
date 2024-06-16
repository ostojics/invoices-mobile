import {CreateInvoiceFormData} from '@/common/dto/CreateInvoiceDTO';
import FormError from '@/components/FormError';
import FormGroup from '@/components/FormGroup';
import {useValidateCreateInvoice} from '@/features/invoices/hooks/useValidateCreateInvoice';
import {Button, Input} from '@rneui/themed';
import {Controller} from 'react-hook-form';
import {ScrollView} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

export default function AddInvoice() {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useValidateCreateInvoice();

  const onSubmit = (data: CreateInvoiceFormData) => {
    console.log('Submit data', data);
  };

  return (
    <SafeAreaView>
      <ScrollView style={{margin: 20}}>
        <FormGroup marginBottom={15} label="Recipient Name">
          <>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} />
              )}
              name="name"
            />
            {errors.name && <FormError errorMsg={errors.name.message ?? 'Invalid name'} />}
          </>
        </FormGroup>
        <FormGroup marginBottom={15} label="Recipient City">
          <>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} />
              )}
              name="city"
            />
            {errors.city && <FormError errorMsg={errors.city?.message ?? 'Invalid city'} />}
          </>
        </FormGroup>
        <FormGroup marginBottom={15} label="Recipient Country">
          <>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} />
              )}
              name="country"
            />
            {errors.country && <FormError errorMsg={errors.country?.message ?? 'Invalid country'} />}
          </>
        </FormGroup>
        <FormGroup marginBottom={15} label="Recipient Address">
          <>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} />
              )}
              name="address"
            />
            {errors.address && <FormError errorMsg={errors.address?.message ?? 'Invalid address'} />}
          </>
        </FormGroup>
        <FormGroup marginBottom={15} label="Recipient Email">
          <>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} />
              )}
              name="email"
            />
            {errors.email && <FormError errorMsg={errors.email?.message ?? 'Invalid email'} />}
          </>
        </FormGroup>
        <FormGroup marginBottom={15} label="Description">
          <>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} />
              )}
              name="description"
            />
            {errors.description && <FormError errorMsg={errors.description?.message ?? 'Invalid description'} />}
          </>
        </FormGroup>

        <FormGroup marginBottom={15} label="Amount">
          <>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} />
              )}
              name="amount"
            />
            {errors.amount && <FormError errorMsg={errors.amount?.message ?? 'Invalid amount'} />}
          </>
        </FormGroup>
        <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
      </ScrollView>
    </SafeAreaView>
  );
}
