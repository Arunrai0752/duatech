export default function LeadForm() {
  return (
    <div
      id="lead-form"
      className="px-6 py-16 max-w-lg mx-auto bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Get Free Quote</h2>

      <form method="POST" action="YOUR_DB_URL_HERE">
        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          className="w-full mb-4 border p-3 rounded"
        />

        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone Number"
          className="w-full mb-4 border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          className="w-full mb-4 border p-3 rounded"
        />

        <textarea
          name="message"
          placeholder="Project Details"
          className="w-full mb-4 border p-3 rounded"
        ></textarea>

        <button
          className="w-full bg-blue-600 text-white p-3 rounded text-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
