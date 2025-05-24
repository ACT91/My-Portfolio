const Contact: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center w-full">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary">Contact Me</h1>
          <p className="mt-4 mb-8">Reach out for collaborations or inquiries!</p>
          <div className="card bg-base-100 shadow-xl">
            <form className="card bg-base-100 p-10 shadow-md max-w-3xl mx-auto space-y-6 w-full">
              <div className="form-control items-center">
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered input-primary w-full text-center"
                  required
                />
              </div>
              <div className="form-control items-center">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="input input-bordered input-primary w-full text-center"
                  required
                />
              </div>
              <div className="form-control items-center">
                <textarea
                  className="textarea textarea-bordered textarea-primary h-28 resize-none w-full text-center"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <div className="form-control items-center">
                <button className="btn btn-primary w-full">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;