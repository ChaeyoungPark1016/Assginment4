import React, { useState } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

function AdvancedSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState('title');
  const [geoLocation, setGeoLocation] = useState('');
  const [medium, setMedium] = useState('');
  const [isHighlight, setIsHighlight] = useState(false);
  const [isOnView, setIsOnView] = useState(false);

  const router = useRouter();

  const { handleSubmit, formState: { errors }, reset } = useForm();

  const submitForm = (data) => {
    const queryString = `searchBy=${encodeURIComponent(data.searchBy)}&geoLocation=${encodeURIComponent(data.geoLocation)}&medium=${encodeURIComponent(data.medium)}&isOnView=${data.isOnView || false}&isHighlight=${data.isHighlight || false}&q=${encodeURIComponent(data.searchQuery)}`;

    console.log(`/artwork?${queryString}`);
    router.push(`/artwork?${queryString}`);
    reset();
  };

  return (
    <div className="mt-5">
      <Form onSubmit={handleSubmit(submitForm)}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className='form-label'>Search Query</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="q"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
              />
              {errors.searchQuery?.type === 'required' && <span className="is-invalid">This field is required.</span>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Label className='form-label'>Search By</Form.Label>
            <Form.Select
              name="searchBy"
              className="mb-3"
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
            >
              <option value="title">Title</option>
              <option value="tags">Tags</option>
              <option value="artistOrCulture">Artist or Culture</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label className='form-label'>Geo Location</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="geoLocation"
                value={geoLocation}
                onChange={(e) => setGeoLocation(e.target.value)}
              />
              <Form.Text className="form-label-muted">
                Case Sensitive String (ie &quot;Europe&quot;, &quot;France&quot;, &quot;Paris&quot;, &quot;China&quot;, &quot;New York&quot;, etc.), with multiple values separated by the | operator
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label className='form-label'>Medium</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="medium"
                value={medium}
                onChange={(e) => setMedium(e.target.value)}
              />
              <Form.Text className="form-label-muted">
                Case Sensitive String (ie: &quot;Ceramics&quot;, &quot;Furniture&quot;, &quot;Paintings&quot;, &Sculpture&quot;, &quot;Textiles&quot;, etc.), with multiple values separated by the | operator
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Check
              className='form-label'
              type="checkbox"
              label="Highlighted"
              name="isHighlight"
              checked={isHighlight}
              onChange={(e) => setIsHighlight(e.target.checked)}
            />
            <Form.Check
              className='form-label'
              type="checkbox"
              label="Currently on View"
              name="isOnView"
              checked={isOnView}
              onChange={(e) => setIsOnView(e.target.checked)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AdvancedSearch;

