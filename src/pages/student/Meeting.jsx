import React, { useEffect, useState } from 'react';
import { fetchMeetings } from '../../api/api'; // Import the fetchMeetings function

const Meetings = ({ section }) => {
  const [meetings, setMeetings] = useState([]);
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  useEffect(() => {
    const getMeetings = async () => {
      const data = await fetchMeetings(section);
      setMeetings(data);
    };

    getMeetings();
  }, [section]);

  const handleMeetingClick = (meeting) => {
    setSelectedMeeting(meeting);
  };

  return (
    <div>
      <h2>Upcoming Meetings</h2>
      {selectedMeeting ? (
        <div>
          <h3>{selectedMeeting.title}</h3>
          <iframe
            src={selectedMeeting.url}
            title={selectedMeeting.title}
            width="600"
            height="400"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>{new Date(selectedMeeting.createdAt).toLocaleString()}</p>
          <button onClick={() => setSelectedMeeting(null)}>Back to Meetings</button>
        </div>
      ) : (
        <>
          {meetings.length > 0 ? (
            <ul>
              {meetings.map(meeting => (
                <li key={meeting._id}>
                  <a href="#" onClick={() => handleMeetingClick(meeting)}>{meeting.title}</a> - {new Date(meeting.createdAt).toLocaleString()}
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming meetings.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Meetings;