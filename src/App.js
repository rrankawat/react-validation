import React from 'react';
import useForm from './hooks/useForm';

const App = () => {
  const { inputs, handleChange, handleSubmit, errors } = useForm({ name: '' });

  return (
    <div className="container my-5">
      <div className="w-50 m-auto">
        <h1 className="text-center mb-5">React Validation</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.name}</div>
          </div>
          <button className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
