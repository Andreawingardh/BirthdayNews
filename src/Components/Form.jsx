export default function Form({ formAction }) {
  return (
    <form className="search-form" action={formAction}>
      <div className="form-group">
        <label htmlFor="dateInput">Please select a date:</label>
        <input id="dateInput" type="date" />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
