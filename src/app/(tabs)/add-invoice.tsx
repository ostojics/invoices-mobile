import {CreateInvoiceFormData} from '@/common/dto/CreateInvoiceDTO';
import FormError from '@/components/FormError';
import FormGroup from '@/components/FormGroup';
import {useCreateInvoice} from '@/features/invoices/hooks/useCreateInvoice';
import {useValidateCreateInvoice} from '@/features/invoices/hooks/useValidateCreateInvoice';
import {getCurrentUser} from '@/lib/api/users';
import {toast} from '@/lib/utils/toast';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {Button, Input, Text} from '@rneui/themed';
import {useQuery} from '@tanstack/react-query';
import {Controller} from 'react-hook-form';
import {ScrollView, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

export default function AddInvoice() {
  const {
    control,
    formState: {errors},
    handleSubmit,
    setValue,
    watch,
    reset,
  } = useValidateCreateInvoice();
  const mutation = useCreateInvoice({reset});

  const dateWatcher = watch('dueDate');

  const {data, isError} = useQuery({
    queryFn: getCurrentUser,
    queryKey: ['current-user'],
  });

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: new Date(dateWatcher),
      onChange: (_, selectedDate) => {
        if (!selectedDate) return;

        setValue('dueDate', selectedDate.toISOString());
      },
      mode: 'date',
      is24Hour: true,
    });
  };

  const onSubmit = (formData: CreateInvoiceFormData) => {
    if (isError) {
      toast({
        type: 'error',
        text1: 'Unable to create a new invoice',
        text2: 'Please try again later',
      });
    }

    if (!data?.data) return;

    mutation.mutate({formData, userData: data.data});
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
        <View style={{marginBottom: 30}}>
          <Text style={{marginBottom: 7}}>selected: {new Date(dateWatcher).toLocaleDateString('sr')}</Text>
          <Button onPress={() => showDatepicker()}>Set due date</Button>
        </View>
        <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
      </ScrollView>
    </SafeAreaView>
  );
}
