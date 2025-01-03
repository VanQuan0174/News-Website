const Input = ({ label, id, name, value, onChange, type = "text" }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                type={type}
                className="form-control"
                id={id}
                name={name}
                value={type === "file" ? undefined : value} // File input không sử dụng value
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
