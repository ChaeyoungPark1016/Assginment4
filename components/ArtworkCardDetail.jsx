import React from "react";
import useSWR from "swr";
import {Card, Button} from "react-bootstrap";
import Link from "next/link";
import Error from "next/error";
import { useRouter } from "next/router";


function ArtworkCard({ objectID }) {
    const { data, error } = useSWR(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
    );
    const router = useRouter();
  
    const handleButtonClick = () => {
      console.log("Button clicked for objectID:", objectID);
      router.push(`/artwork/${objectID}`);
    };
  
    if (error) {
      return <Error />;
    }
  
    if (!data) {
      return null;
    }
  
    const {primaryImageSmall,title,objectDate,classification,medium,} = data;
  
    return (
      <Card className="hero-card" style={{ width: "18rem" }}>
        {primaryImageSmall ? ( 
          <Card.Img
            className="card-image"
            variant="top"
            src={primaryImageSmall}
            style={{ width: "100%", height: "auto" }}
          />
        ) : (
          <Card.Img
            className="card-image"
            variant="top"
            src="https://via.placeholder.com/375x375.png?text=[+Not+Available+]"
            style={{ width: "100%", height: "auto" }}
          />
        )}
        <Card.Body>
          <Card.Title className="card-title">{title || "N/A"}</Card.Title>
          <Card.Text>
            {objectDate && (
              <p><strong>Date:</strong> {objectDate}</p>
            )}
            {classification && (
              <p><strong>Classification:</strong> {classification}</p>
            )}
            {medium && (
              <p><strong>Medium:</strong> {medium}</p>
            )}
          </Card.Text>
          <Link passHref href={`/artwork/${objectID}`}>
            <Button variant="dark" onClick={handleButtonClick}><strong>ID:</strong> {objectID}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }

  export default ArtworkCard;
