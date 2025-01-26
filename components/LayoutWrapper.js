import Footer from './Footer';
import Navbar from './Navbar';
import SectionContainer from './SectionContainer';

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <SectionContainer>
        <main className="mb-auto">{children}</main>
      </SectionContainer>
      <Footer />
    </>
  );
};

export default LayoutWrapper;
