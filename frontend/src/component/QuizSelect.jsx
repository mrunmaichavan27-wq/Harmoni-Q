import React from "react";
import "./QuizSelect.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMusic, FaHeadphones } from "react-icons/fa";



const QuizSelect = ({ onStartMCQ, onStartAudio }) => {
    return (
        <div className="quiz-page">
        <div className="container text-center">

                {/* Heading */}
                <h1 className="quiz-title">
                    Choose Your Music Challenge 🎶
                </h1>

                <p className="quiz-subtitle">
                    Play, listen, and test your music skills in a fun way.
                    Level up your musical knowledge with interactive challenges!
                </p>

                {/* Cards */}
                <div className="row justify-content-center mt-5">

                    {/* MCQ Card */}
                    <div className="col-md-5 mb-4">
                        <div className="quiz-card">
                            <FaMusic className="quiz-icon orange" />
                            <h3>Music MCQ Quiz</h3>

                            <p className="quiz-desc">
                                Answer interactive music questions and test your theory knowledge.
                            </p>

                            <ul className="quiz-features">
                                <li>✔ Timed questions</li>
                                <li>✔ Instant score</li>
                                <li>✔ Result saved to profile</li>
                            </ul>

                            <button
                                className="quiz-btn orange-btn"
                                onClick={onStartMCQ}
                            >
                                Start MCQ Quiz →
                            </button>
                     </div>
                    </div>

                    {/* 🎧 Audio Card */}
                    <div className="col-md-5 mb-4">
                        <div className="quiz-card">
                            <FaHeadphones className="quiz-icon purple" />
                            <h3>Audio Listening Quiz</h3>

                            <p className="quiz-desc">
                                Listen to sounds and choose the correct answer.
                                Train your ears!
                            </p>

                            <ul className="quiz-features">
                                <li>✔ Real audio clips</li>
                                <li>✔ Ear-training based</li>
                                <li>✔ Performance score</li>
                            </ul>

                            <button
                                className="quiz-btn purple-btn"
                                onClick={onStartAudio}
                            >
                                Start Audio Quiz →
                            </button>

                        </div>
                    </div>

               </div>
                <p className="quiz-footer mt-4">
                    🎼 Challenge yourself daily and become a music master!
                </p>

            </div>
        </div>
    );
}; export default QuizSelect;
