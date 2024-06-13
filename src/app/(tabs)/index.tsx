import InvoiceList from '@/features/invoices/components/InvoiceList';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <InvoiceList />
    </SafeAreaView>
  );
}
