// REACT
import { useState, useEffect } from "react";

// NAVIGATION
import { useLocation } from "react-router-dom";

// STORE
import { useDispatch, useSelector } from "react-redux";

// DESIGN
import { MDBContainer } from "mdbreact";

// FORM VALIDATION
import { Formik } from "formik";
import * as Yup from "yup";

// ACTIONS
import {
  fetchExpenseById,
  updateExpense,
  saveExpense,
} from "../actions/expense_actions";

// SELECTORS
import { expense_selectors } from "../selectors/expense_selectors";

// MOMENT
import moment from "moment";
import Edit from "./Edit";
import View from "./View";
import Add from "./Add";

// OUR FORM COMPONENT
function Form() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("edit");
  const view = new URLSearchParams(location.search).get("view");
  const isEditMode = !!id;
  const isViewMode = !!view;

  // State
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
    amount: "",
    approved: "",
  });

  // use Dispatch
  const dispatch = useDispatch();

  // use
  const expense_user = useSelector(expense_selectors);

  // dispatch action to the store to retrieve the user by its ID
  useEffect(() => {
    if (isEditMode) {
      dispatch(fetchExpenseById(id));
    }
    if (isViewMode) {
      console.log(expense_user);
      dispatch(fetchExpenseById(view));
    }
  }, []);

  // set user in state
  useEffect(() => {
    if (isEditMode || isViewMode) {
      console.log(expense_user);
      setFormData({
        name: expense_user && expense_user[0].name,
        date: expense_user && moment(expense_user[0].date).format("YYYY-MM-DD"),
        description: expense_user && expense_user[0].description,
        amount: expense_user && expense_user[0].amount,
        approved: expense_user && expense_user[0].approved === 1 ? "Yes" : "No",
      });
    }
  }, [expense_user]);

  if (location.search) {
    if (view) {
      return <View formData={formData} />;
    } else {
      return (
        <MDBContainer className="scrollbar scrollbar-orange bordered-orange thin containercard">
          <Formik
            // Initial Values
            initialValues={formData}
            // Submit method if everything is fine
            onSubmit={(values) => {
              const { name, date, description, amount, approved } = values;
              dispatch(
                updateExpense(id, name, date, description, amount, approved)
              );
            }}
            // Validation Schema
            validationSchema={Yup.object().shape({
              name: Yup.string().required(
                "* Name of the claimer can't be empty!"
              ),
              date: Yup.string().required(
                "* Date of the expense can't be empty!"
              ),
              description: Yup.string()
                .required("* Description can't be empty!")
                .min(50, "* Description must be at least 50 characters"),
              amount: Yup.string().required("* Amount can't be empty!"),
              approved: Yup.string().required("* Approved can't be empty!"),
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
              } = props;
              return (
                <>
                  <Edit
                    setFieldValue={setFieldValue}
                    values={values}
                    touched={touched}
                    errors={errors}
                    isSubmitting={isSubmitting}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    handleSubmit={handleSubmit}
                  />
                </>
              );
            }}
          </Formik>
        </MDBContainer>
      );
    }
  } else {
    return (
      <MDBContainer className="scrollbar scrollbar-orange bordered-orange thin containercard">
        <Formik
          // Initial Values
          initialValues={formData}
          // Submit method if everything is fine
          onSubmit={(values) => {
            const { name, date, description, amount, approved } = values;
            dispatch(
              saveExpense(
                name,
                date.format("YYYY-MM-DD"),
                description,
                amount,
                approved
              )
            );
          }}
          // Validation Schema
          validationSchema={Yup.object().shape({
            name: Yup.string().required(
              "* Name of the claimer can't be empty!"
            ),
            date: Yup.string().required(
              "* Date of the expense can't be empty!"
            ),
            description: Yup.string()
              .required("* Description can't be empty!")
              .min(50, "* Description must be at least 50 characters"),
            amount: Yup.string().required("* Amount can't be empty!"),
            approved: Yup.string().required("* Approved can't be empty!"),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            } = props;

            return (
              <Add
                setFieldValue={setFieldValue}
                values={values}
                touched={touched}
                errors={errors}
                isSubmitting={isSubmitting}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
              />
            );
          }}
        </Formik>
      </MDBContainer>
    );
  }
}

export default Form;
