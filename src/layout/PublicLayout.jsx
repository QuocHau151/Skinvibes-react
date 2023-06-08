import { Breadcrumb } from 'components/shared/Breadcrumb/Breadcrumb';
import { Layout } from './Layout';

export const PublicLayout = ({
  children,
  breadcrumb,
  breadcrumbTitle,
  description,
}) => {
  return (
    <Layout>
      <Breadcrumb
        
      />
      <>{children}</>
    </Layout>
  );
};
