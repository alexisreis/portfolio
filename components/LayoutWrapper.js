import Footer from './Footer';
import Navbar from './Navbar';
import SectionContainer from './SectionContainer';

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <SectionContainer>
        <div className="">
          <main className="mb-auto">{children}</main>
        </div>
      </SectionContainer>
      <Footer />
    </>
  );
};

export default LayoutWrapper;
