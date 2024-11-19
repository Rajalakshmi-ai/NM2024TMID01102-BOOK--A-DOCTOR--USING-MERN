// //import { Col, Form, Input, Row, TimePicker, message } from "antd";
// import axios from "axios";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { hideLoading, showLoading } from "../redux/features/alertSlice";
// import Layout from "./../components/Layout";

// const ApplyDoctor = () => {
//   const { user } = useSelector((state) => state.user);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleFinish = async (values) => {
//     try {
//       dispatch(showLoading());
//       const starttime = values.starttime.format("HH:mm");
//       const endtime = values.endtime.format("HH:mm");
//       const res = await axios.post(
//         "/api/user/apply-doctor",
//         {
//           ...values,
//           userId: user._id,
//           starttime,
//           endtime,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       dispatch(hideLoading());
//       if (res.data.success) {
//         message.success(res.data.message);
//         navigate("/");
//       } else {
//         message.error(res.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       console.log(error);
//       message.error("Something Went Wrong");
//     }
//   };
  
//   return (
//     <Layout>
//       <h3 className="text-center">Apply Doctor</h3>
//       <Form layout="vertical" onFinish={handleFinish} className="m-3">
//         <h4 className="">Personal Details : </h4>
//         <Row gutter={20}>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="First Name"
//               name="firstName"
//               required
//               rules={[{ required: true, message: "First name is required" }]}
//             >
//               <Input type="text" placeholder="First Name" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Last Name"
//               name="lastName"
//               required
//               rules={[{ required: true, message: "Last name is required" }]}
//             >
//               <Input type="text" placeholder="Last Name" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Phone"
//               name="phone"
//               required
//               rules={[{ required: true, message: "Phone number is required" }]}
//             >
//               <Input type="text" placeholder="Phone Number" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Email"
//               name="email"
//               required
//               rules={[{ required: true, message: "Email is required" }]}
//             >
//               <Input type="email" placeholder="Email" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item label="Website" name="website">
//               <Input type="text" placeholder="Website" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Address"
//               name="address"
//               required
//               rules={[{ required: true, message: "Address is required" }]}
//             >
//               <Input type="text" placeholder="Clinic Address" />
//             </Form.Item>
//           </Col>
//         </Row>
//         <br />
//         <h4>Professional Details :</h4>
//         <Row gutter={20}>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Specialization"
//               name="specialization"
//               required
//               rules={[
//                 { required: true, message: "Specialization is required" },
//               ]}
//             >
//               <Input type="text" placeholder="Specialization" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Experience"
//               name="experience"
//               required
//               rules={[{ required: true, message: "Experience is required" }]}
//             >
//               <Input type="text" placeholder="Experience" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Fees Per Consultation"
//               name="feesPerConsultation"
//               required
//               rules={[{ required: true, message: "Fee is required" }]}
//             >
//               <Input type="text" placeholder="Fee" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               name="starttime"
//               label="Start Time"
//               rules={[{ required: true }]}
//             >
//               <TimePicker format="HH:mm" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               name="endtime"
//               label="End Time"
//               rules={[{ required: true }]}
//             >
//               <TimePicker format="HH:mm" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}></Col>
//           <Col xs={24} md={24} lg={8}>
//             <br />
//             <button className="btn btn-primary form-btn" type="submit">
//               Submit
//             </button>
//           </Col>
//         </Row>
//       </Form>
//     </Layout>
//   );
// };

// export default ApplyDoctor;


import { Col, Form, Input, Row, TimePicker, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import Layout from "./../components/Layout";

const ApplyDoctor = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleFinish = async (values) => {
  //   try {
  //     dispatch(showLoading());
  //     const starttime = values.starttime.format("HH:mm");
  //     const endtime = values.endtime.format("HH:mm");
  //     const res = await axios.post(
  //       "/api/user/apply-doctor",
  //       {
  //         ...values,
  //         userId: user._id,
  //         starttime,
  //         endtime,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     dispatch(hideLoading());
  //     console.log("Request Payload:", { ...values, userId: user._id, starttime, endtime });
  //     console.log("Response Data:", res.data);

  //     if (res.data.success) {
  //       message.success(res.data.message);
  //       navigate("/");
  //     } else {
  //       message.error(res.data.message);
  //     }
  //   } catch (error) {
  //     dispatch(hideLoading());
  //     console.log("Error Response:", error.response);
  //     message.error(error.response?.data?.message || "Something Went Wrong");
  //   }
  // };
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const starttime = values.starttime.format("HH:mm");
      const endtime = values.endtime.format("HH:mm");
  
      const res = await axios.post(
        "/api/user/apply-doctor",
        {
          ...values,
          userId: user._id,
          starttime,
          endtime,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
  
      dispatch(hideLoading());
  
      // Log the request and response for debugging
      console.log("Request Payload:", { ...values, userId: user._id, starttime, endtime });
      console.log("Response Data:", res.data);
  
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
  
      // More detailed error logging and messages
      if (error.response) {
        // Server responded with a status code other than 2xx
        console.log("Error Response Data:", error.response.data);
        console.log("Error Status:", error.response.status);
        console.log("Error Headers:", error.response.headers);
        message.error(error.response.data.message || "Something Went Wrong on the server.");
      } else if (error.request) {
        // The request was made but no response was received
        console.log("Error Request:", error.request);
        message.error("No response from server. Please try again later.");
      } else {
        // Something else caused an error
        console.log("Error Message:", error.message);
        message.error("Error in setting up request.");
      }
    }
  };
  

  return (
    <Layout>
      <h3 className="text-center">Apply Doctor</h3>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4 className="">Personal Details : </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true, message: "First name is required" }]}
            >
              <Input type="text" placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true, message: "Last name is required" }]}
            >
              <Input type="text" placeholder="Last Name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone"
              name="phone"
              required
              rules={[
                { required: true, message: "Phone number is required" },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              ]}
            >
              <Input type="text" placeholder="Phone Number" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Website" name="website">
              <Input type="text" placeholder="Website" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true, message: "Address is required" }]}
            >
              <Input type="text" placeholder="Clinic Address" />
            </Form.Item>
          </Col>
        </Row>
        <br />
        <h4>Professional Details :</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              required
              rules={[
                { required: true, message: "Specialization is required" },
              ]}
            >
              <Input type="text" placeholder="Specialization" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Experience"
              name="experience"
              required
              rules={[{ required: true, message: "Experience is required" }]}
            >
              <Input type="text" placeholder="Experience" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Fees Per Consultation"
              name="feesPerConsultation"
              required
              rules={[{ required: true, message: "Fee is required" }]}
            >
              <Input type="text" placeholder="Fee" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              name="starttime"
              label="Start Time"
              rules={[
                { required: true, message: "Start time is required" },
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Start time must be valid"),
                },
              ]}
            >
              <TimePicker format="HH:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              name="endtime"
              label="End Time"
              rules={[
                { required: true, message: "End time is required" },
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("End time must be valid"),
                },
              ]}
            >
              <TimePicker format="HH:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <br />
            <button className="btn btn-primary form-btn" type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;
