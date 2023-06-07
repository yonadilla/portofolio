import Contacs from "../component/contacs";
import Header from "../section/Header";

function ContactsPaga() {
  return (
    <>
      <Header
        pages={
          <>
            <div className=" text-xl my-6">
              <p className=" text-white"><span className=" text-primary">/</span>Contacts</p>
            </div>
            <Contacs />
          </>
        }
      />
    </>
  );
}

export default ContactsPaga;
