import React, { useEffect, useState } from 'react'
import "./DashboardHome.css"
import "./DashboardHomeMobile.css"
import { useSelector } from 'react-redux';
import axios from 'axios';
import roundface from "../assets/RoundFace.svg"
// import { error } from 'style';
import { HashLoader } from 'react-spinners';


export const Dashboardhome = () => {


   const [user, setUser] = useState([]);
   const [newUser, setNewUser]=useState([])
   const [loading,setLoading] = useState(false)
  // console.log("kkkk",user);
  // const userId=useSelector((state)=>state.user.id)
  const token = useSelector((state) => state.user.token);
  // console.log(token);
  //  const data = [
  //   1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,161,171,181,191,20
  // ]
 const getAllUser = () => {
   setLoading(true);
   const url = "https://alertify-9tr5.onrender.com/api/v1/user/all";
   axios
     .get(url, {
       headers: {
         application: "application/json",
         Authorization: `Bearer ${token}`,
       },
     })
     .then((res) => {
       console.log(res?.data?.data);
       setNewUser(res?.data?.data);
       setLoading(false);
     })
     .catch((err) => {
       console.log(err);
       setLoading(false);
     });
 };
  // const Alertify = [
  // 1,2,3,4,5,6,7,8,9,10,11,12,13
  // ]
  const getAll = async () =>{
    setLoading(true)
    try{
      const responce = await axios.get( `https://alertify-9tr5.onrender.com/api/v1/user/all-reports`, 
        {
          headers: {
            application: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(responce?.data)
      setLoading(false)
    } catch (error){
   console.log(error)
   setLoading(false)
    }
}

  // const getAllUserReport = () => {
    // const url = "https://alertify-9tr5.onrender.com/api/v1/user/all-reports";
  //   axios
  //     .get(url, {
  //       headers: {
  //         application: "application/json",
  //         Authorization: `Bearer ${token }`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res?.data?.data);
  //       setUser(res?.data?.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    getAll();
    getAllUser();

  },[]);
  
  


  return (
    <div className="DashBoardHomeContainer">
      <div className="DashboardHomeContainerInner">
        <div className="DashboardHomeContaineroverflow">
          <div className="DashboardHomeActiveReport">
            <h1 className="DashBoardHomeh1">Active Report OverView</h1>

            <div className="DashboardActiveReportInner">
              {loading ? (
                <div
                  className="DashboardActiveReportInner"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70vh",
                  }}
                >
                  <HashLoader color="blue" size={150} />
                </div>
              ) : (
                <>
                  {user.map((e) => (
                    <div className="DashboardActiveReportCard">
                      <div className="DashBaordActiveReportProfile">
                        <img src={roundface} className="DashBoardActiveReportImahe" />
                      </div>

                      <div className="DashBoardAvtiveReportText">
                        <h3 style={{ fontSize: "14px" }}>
                          {e.userId?.fullName}
                        </h3>
                        <p>{e.userId?.email}</p>
                      </div>

                      <div className="DashBoardAvtiveReportText2">
                        <p>Report Location: {e.preciseLocation}</p>
                        <p>
                          Received by: contact 1, contact 2, contact 3, mail 2:
                          23, sanusi Street Ajegunle lagos state
                        </p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          {/* 
          <div className="DashboardHomeActiveReport">
            <h1 className="DashBoardHomeh1">Previous Report OverView</h1>
            <div className="DashboardActiveReportInner">
              {data.map(() => (
                <div className="DashboardActiveReportCard">
                  <div className="DashBaordActiveReportProfile">
                    <img src={""} className="DashBoardActiveReportImahe" />
                  </div>

                  <div className="DashBoardAvtiveReportText">
                    <h3 style={{ fontSize: "14px" }}>Ike Chiamaka</h3>
                    <p>ikeChiamaka@gmail.com</p>
                  </div>

                  <div className="DashBoardAvtiveReportText2">
                    <p>
                      Report Location: 23, sanusi Street Ajegunle lagos state
                    </p>
                    <p>
                      Received by: contact 1, contact 2, contact 3, mail 2: 23,
                      sanusi Street Ajegunle lagos state
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="DashBoardHomeAlertifyContainer">
            <h1 className="DashBoardHomeh1">Alertify User</h1>
            <div className="DashBoardHomeAlertifyUser">
              {newUser.map((e) => (
                <div className="DashBoardalertifyProfileContainer">
                  <div className="DashBoardHomeProfilePicture">
                    <img src={user ? e.profilePic : roundface} alt="" />
                  </div>
                  <h5>{e.fullName}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
