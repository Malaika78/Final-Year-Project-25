import React, { useEffect, useState } from "react";
import axios from "axios";

const FeedbackSection = ({ restaurantId }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const fetchFeedbacks = async () => {
    const resp = await axios.get(
      `http://localhost:4000/api/feedback/restaurant/${restaurantId}`
    );
    setFeedbacks(resp.data.data);
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/feedback", {
      restaurantId,
      name,
      rating,
      comment,
    });
    setName("");
    setRating(5);
    setComment("");
    fetchFeedbacks();
  };

  useEffect(() => {
    fetchFeedbacks();
  }, [restaurantId]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Customer Feedback</h2>

      <div style={styles.feedbackList}>
        {feedbacks.length > 0 ? (
          feedbacks.map((fb, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.cardHeader}>
                <strong>{fb.name || "Anonymous"}</strong>
                <span style={styles.rating}>{fb.rating} ★</span>
              </div>
              <p style={styles.comment}>{fb.comment}</p>
            </div>
          ))
        ) : (
          <p>No feedback yet.</p>
        )}
      </div>

      <form onSubmit={handleFeedbackSubmit} style={styles.form}>
        <h3 style={styles.formTitle}>Leave Your Feedback</h3>

        <input
          type="text"
          placeholder="Your Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          style={styles.select}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n} Star{n > 1 && "s"}
            </option>
          ))}
        </select>

        <textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "60px",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "20px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
  },
  title: {
    fontSize: "26px",
    marginBottom: "20px",
    color: "#333",
  },
  feedbackList: {
    marginBottom: "40px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px 20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    marginBottom: "15px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  rating: {
    backgroundColor: "#ffcc00",
    borderRadius: "10px",
    padding: "2px 8px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  comment: {
    margin: 0,
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formTitle: {
    fontSize: "20px",
    color: "#444",
  },
  input: {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  select: {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  textarea: {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    resize: "vertical",
    minHeight: "100px",
  },
  button: {
    padding: "12px 20px",
    borderRadius: "10px",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default FeedbackSection;
