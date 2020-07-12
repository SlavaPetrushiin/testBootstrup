import React, {useState} from 'react';
import {useSelector} from "react-redux";

const Field = (field) => {
    const [value, setValue] = useState("")

    const input = (
        <input
            className="form-control"
            type={field.type}
            id={field.name}
            required={field.required}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
        />
    );

    const textarea = (
        <textarea
            className="form-control textarea"
            id={field.name}
            rows="4"
            required={field.required}
        />
    );

    return (
        <>
            <label
                className={"label"}
                htmlFor={field.name}
            >
                {field.label}
            </label>
            {field.group === "main" ? input : textarea}
        </>
    )
};

function renderInput(fields) {
    let mainFields = fields.filter(field => field.group === "main");

    return mainFields.map(field => {
        return (
            <div className="col-sm-12 col-lg-6" key={field.name}>
                <div className="form-group">
                    <Field {...field}/>
                </div>
            </div>
        )
    })
}

function renderTextarea(fields) {
    let additionalFields = fields.filter(field => field.group === "additional");

    return additionalFields.map(additional => {
        return (
            <React.Fragment key={additional.name}>
                <Field {...additional} />
            </React.Fragment>
        )
    })
}

const FormContacts = () => {
    let fieldsMain, fieldsAdditional;
    const contacts = useSelector(state => state.galleryPage.form);

    if (!!contacts.fields) {
        fieldsMain = renderInput(contacts.fields);
        fieldsAdditional = renderTextarea(contacts.fields);
    }

    return (
        <div className="mt-4">
            <h3 className={"title"}>{contacts.title ? contacts.title : 'Свяжитесь с нами'}</h3>
            <form>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="row">
                            {fieldsMain && fieldsMain[0]}
                            {fieldsMain && fieldsMain[1]}
                        </div>
                        <div className="row">
                            {fieldsMain && fieldsMain[2]}
                            {fieldsMain && fieldsMain[3]}
                        </div>
                    </div>
                    <div className="comment">
                        {fieldsAdditional}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label link" htmlFor="defaultCheck1">
                                Я даю согласие на обработку персональных данных согласно <a href={'#'}>политике
                                конфиденциальности.</a>
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn button">Отправить заявку</button>
            </form>
        </div>
    );

};

export default FormContacts;