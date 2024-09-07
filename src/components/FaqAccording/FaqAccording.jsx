import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function FaqAccording() {
  return (
    <>
      <div
        className="according-container  py-8"
        style={{ background: "linear-gradient(#D3E2EF,#F2E9D8)" }}
      >
        <div className="main-container">
          <div className="Accordind-title-bar  bg-white text-center flex justify-center items-center shadow-xl px-4 py-6 mb-12 ">
            <h1 className="text-3xl font-heading font-normal text-center">
              Frequently Asked Questions (FAQs)
              {/* <i className=" text-Yellow"> Questions</i> */}
            </h1>
          </div>
          <div>
            <Accordion
              style={{
                padding: "1.2rem 1rem",
                marginBottom: "1rem",
                borderRadius: "20px",
              }}
              defaultExpanded
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{
                  fontWeight: "bold",
                }}
              >
                What types of boxes can you print?
              </AccordionSummary>
              <AccordionDetails>
                We offer a wide range of box printing services, including custom
                sizes, shapes, and designs. Whether you need retail packaging,
                shipping boxes, or specialty designs, we can handle it all.
              </AccordionDetails>
            </Accordion>
            <Accordion
              style={{
                padding: "1.2rem 1rem",
                marginBottom: "1rem",
                borderRadius: "20px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                style={{
                  fontWeight: "bold",
                }}
              >
                Can I provide my own design for the boxes?
              </AccordionSummary>
              <AccordionDetails>
                Absolutely! You can provide your own design, or our design team
                can work with you to create a custom look that fits your brand.
              </AccordionDetails>
            </Accordion>
            <Accordion
              style={{
                padding: "1.2rem 1rem",
                marginBottom: "1rem",
                borderRadius: "20px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                style={{
                  fontWeight: "bold",
                }}
              >
                What is the minimum order quantity?
              </AccordionSummary>
              <AccordionDetails>
                Our minimum order quantity varies depending on the type and size
                of the box, but we strive to accommodate both small and large
                orders.
              </AccordionDetails>
              {/* <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions> */}
            </Accordion>
            <Accordion
              style={{
                padding: "1.2rem 1rem",
                marginBottom: "1rem",
                borderRadius: "20px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                style={{
                  fontWeight: "bold",
                }}
              >
                How long does it take to complete an order?
              </AccordionSummary>
              <AccordionDetails>
                Production times depend on the complexity and quantity of your
                order. We typically complete orders within 7-10 business days,
                but we also offer expedited services if you’re on a tight
                deadline.
              </AccordionDetails>
              {/* <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions> */}
            </Accordion>
            <Accordion
              style={{
                padding: "1.2rem 1rem",
                marginBottom: "1rem",
                borderRadius: "20px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                style={{
                  fontWeight: "bold",
                }}
              >
                Do you offer eco-friendly packaging options?
              </AccordionSummary>
              <AccordionDetails>
                Yes, we offer eco-friendly materials and printing options to
                help reduce environmental impact while maintaining high-quality
                results.
              </AccordionDetails>
              {/* <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions> */}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
export default FaqAccording;
