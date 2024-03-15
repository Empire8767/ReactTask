import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-section mt-5">
                <img src="child-one-iamge.webp" alt="" />
              </div>
            </div>

            <div className="col-lg-6 col-md-9">
              <div className="text-section mt-5 text-center ">
                <h1 className=" h1 mt-3">Create Account</h1>
                <button className="btn btn-outline-secondary  text-capitalize  w-75 mt-3 ">
                  {" "}
                  Sign Up With Google{" "}
                </button>

                <h2 className="title mt-4  offset-md-3 ">Or</h2>

                <form className="offset-2 ">
                  <div className="form-group mt-5 ">
                    <input
                      type="email"
                      className="form-control  w-75 "
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Full Name"
                    />

                    <input
                      type="email"
                      className="form-control mt-5  w-75"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                    />

                    <input
                      type="password"
                      className="form-control mt-5 w-75"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Password"
                    />
                  </div>
                </form>

                <button
                  className="btn mt-3 w-75"
                  style={{
                    backgroundColor: " #ff4e00",
                    fontSize: "2rem",
                    color: "#fff",
                    borderRadius: "30px",
                  }}
                >
                  Create Account
                </button>

                <p
                  className="first para mt-3"
                  style={{ fontSize: "1rem", fontWeight: "500" }}
                >
                  Already Have An Account?{" "}
                  <span style={{ color: " #ff4e00" }}>Log In</span>
                </p>

                <ul class="list-unstyled jus social-icon mb-3 mb-md-0 offset-md-4">
                  <li>
                    <i class="fab fa-facebook-f"></i>
                  </li>
                  <li>
                    <i class="fab fa-twitter"></i>
                  </li>
                  <li>
                    <i class="fab fa-linkedin-in"></i>
                  </li>
                  <li>
                    <i class="fab fa-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
