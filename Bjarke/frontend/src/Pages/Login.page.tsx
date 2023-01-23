import Heading from "../Layout/Heading";

const LoginPage = () => {
  return (
    <section>
      <div className="md:min-h-[70%]">
        <Heading text={"Log-in"} />
        <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg flex p-4 justify-center "></div>
      </div>
    </section>
  );
};

export default LoginPage;

/*
LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};*/
