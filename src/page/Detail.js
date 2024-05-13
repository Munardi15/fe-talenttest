import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Spin, Button } from 'antd';
import axios from 'axios';
import '../css/UserDetailPage.css';

const UserDetailPage = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/api/users/${id}`)
      .then(response => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="user-detail-container">
      <h1 className="user-detail-title">User Detail</h1>
      <div className="user-detail-content">
        <Card className="user-detail-card" title="User Information">
          {loading ? (
            <Spin />
          ) : (
            userData && (
              <>
                <p><strong>User Name:</strong> {userData.userName}</p>
                <p><strong>Account Number:</strong> {userData.accountNumber}</p>
                <p><strong>Email Address:</strong> {userData.emailAddress}</p>
                <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
                <p><strong>Gender:</strong> {userData.gender}</p>
                <p><strong>Employment Status:</strong> {userData.employmentStatus}</p>
                <p><strong>Position:</strong> {userData.position}</p>
              </>
            )
          )}
          <div className="user-detail-back">
            <Link to="/">
              <Button type="primary" shape="round">Back</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserDetailPage;
