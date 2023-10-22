function VerificationPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded shadow p-4 w-[20em]">
        <h1 className="text-center text-orange-theme font-semibold text-xl mb-5">
          Account Verification
        </h1>
        <p className="text-center text-sm text-gray-900 font-medium mb-2">
          Thanks for register our shorten url web.
        </p>
        <p className="text-center text-sm text-gray-900 mb-8">
          To complete registration, please confirm your account with the link we
          sent via email
        </p>

        <p className="text-center text-sm text-gray-600 mb-5">
          If you don't receive the email, you can resend the email with below
          button
        </p>

        <div className="flex justify-center">
          <button className="bg-orange-theme rounded shadow py-1 px-3 text-sm font-medium text-white">
            Resend Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerificationPage;
