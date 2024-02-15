import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Gallery.css";
import Footer from "../../Components/Footer/Footer";
import MonthWiseImages from "../../Components/Gallery/MonthWiseImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header/Header";



const Gallery = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");

  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [getFormatedDates, setFormatedDates] = useState(`${selectedYear}-${selectedMonth}`);

  const [MaxDate] = useState({ year: 2023, month: 1 });
  const [MonthsCount, setMonthsCount] = useState(0);
  const [showMonths, setShowMonths] = useState(false); // To toggle display of months


  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setShowMonths(true); // Show months when year changes
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setFormatedDates(`${selectedYear}-${e.target.value}`);
    setMonthsCount(0);
  };

  return (
    <>
      <Header Gallery={true} />
      <Container fluid>
        <Row>
          <Col md={3} className="mb-3">
            <Col
              className="datePicker"
              style={{
                border: 1,
                borderStyle: "solid",
                borderColor: "#e9e4c9",
              }}
            >
              <div className="SelectDate">Select Date</div>
              <select
                value={selectedYear}
                onChange={handleYearChange}
                className="select"

              >
                {Array.from(
                  { length: year + 1 - MaxDate.year },
                  (_, i) => year - i
                ).map((yearValue) => (
                  <option
                    key={yearValue}
                    value={yearValue}
                    className={
                      yearValue === parseInt(selectedYear) ? "active" : ""
                    }
                  >
                    {yearValue}
                  </option>
                ))}
              </select>
              <br />
              {
                <div
                  className="scrollable-months"
                  style={{ maxHeight: "150px", overflowY: "auto" }}
                >
                  {/* Display all twelve months */}
                  <Row>
                    {Array.from(
                      { length: selectedYear == year ? month : 12 },
                      (_, i) => i + 1
                    ).map((month) => (
                      <Col key={month} xs={12}>
                        <button
                          className={`btn btn-light w-100 mb-2 months_font ${parseInt(selectedMonth) === month ? "MonthsButtonActive" : ""
                            }`}
                          value={month.toString().padStart(2, "0")}
                          onClick={handleMonthChange}
                        >
                          {(parseInt(selectedMonth) === month) && <FontAwesomeIcon icon={faArrowRight} />}{" "}
                          {new Date(selectedYear, month - 1).toLocaleString(
                            "default",
                            { month: "long" }
                          )}
                        </button>
                      </Col>
                    ))}
                    <Col key={month} xs={12}></Col>
                    <Col key={month} xs={12}></Col>
                    <Col key={month} xs={12}></Col>
                  </Row>
                </div>
              }
            </Col>
          </Col>
          <Col md={9} className="GalleryCol">
            {/* Gallery */}
            <MonthWiseImages
              key={getFormatedDates}
              FormatedDate={getFormatedDates}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Gallery;
