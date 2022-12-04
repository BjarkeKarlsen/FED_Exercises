import Heading from "../Layout/Heading";
import Form from "../Components/Login/Form";

const LoginPage = () => {
  return (
    <div className="md:min-h-[70%]">
      <Heading text={"Log-in"} />
      <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg flex p-4 justify-center ">
        <Form />
      </div>
    </div>
  );
};

export default LoginPage;

/*
LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};*/
