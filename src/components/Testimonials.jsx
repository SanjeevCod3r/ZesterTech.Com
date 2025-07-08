import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSwipeable } from 'react-swipeable';

const Section = styled.section`
  padding: 80px 0;
  background: #000;
  color: #fff;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;

  &::after {
    content: '';
    display: block;
    margin: 20px auto 0;
    width: 60px;
    height: 3px;
    background: #fff;
  }
`;

const Slider = styled.div`
  overflow: hidden;
  position: relative;
`;

const SliderContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ current }) => `translateX(-${current * 100}%)`};
`;

const Slide = styled.div`
  flex: 0 0 100%;
  padding: 20px;
`;

const Card = styled.div`
  background: #000;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.1),
              0 0 25px 5px rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Quote = styled.div`
  margin-bottom: 30px;

  svg {
    font-size: 30px;
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    color: #f1f1f1;
    line-height: 1.6;
  }
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 2px solid #fff;
`;

const AuthorInfo = styled.div`
  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #fff;
  }

  span {
    font-size: 0.9rem;
    color: #ccc;
  }
`;

const Dots = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;

  span {
    width: 12px;
    height: 12px;
    background: #fff;
    opacity: ${({ active }) => (active ? 1 : 0.3)};
    border-radius: 50%;
    cursor: pointer;
    transition: opacity 0.3s;
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Cuberto's team is incredibly professional and creative. They helped us build a product that exceeded our expectations.",
      author: "John Doe",
      position: "CEO, TechCorp",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce"
    },
    {
      id: 2,
      quote: "The design solutions they provided were innovative and user-friendly. Their attention to detail is outstanding.",
      author: "Jane Smith",
      position: "CTO, Startup Inc.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
    },
    {
      id: 3,
      quote: "Working with Cuberto was a pleasure. Their communication was excellent and they delivered on time.",
      author: "Mike Johnson",
      position: "Founder, Growth Co.",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61"
    },
    {
      id: 4,
      quote: "Their expertise helped us transform our business digitally. The UI/UX was top-notch.",
      author: "Lisa Wong",
      position: "Product Head, FinServ",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
      id: 5,
      quote: "Truly a world-class experience. Every milestone was met with precision and elegance.",
      author: "Carlos Vega",
      position: "VP, Marketly",
      image: "https://images.unsplash.com/photo-1502767089025-6572583495b0"
    }
  ];

  const [current, setCurrent] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    trackMouse: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Section>
      <Container>
        <SectionTitle>What Our Clients Say</SectionTitle>
        <Slider {...handlers}>
          <SliderContent current={current}>
            {testimonials.map((testimonial) => (
              <Slide key={testimonial.id}>
                <Card>
                  <Quote>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <p>{testimonial.quote}</p>
                  </Quote>
                  <Author>
                    <Image src={testimonial.image} alt={testimonial.author} />
                    <AuthorInfo>
                      <h3>{testimonial.author}</h3>
                      <span>{testimonial.position}</span>
                    </AuthorInfo>
                  </Author>
                </Card>
              </Slide>
            ))}
          </SliderContent>
        </Slider>
        <Dots>
          {testimonials.map((_, index) => (
            <span
              key={index}
              active={index === current ? 1 : 0}
              onClick={() => setCurrent(index)}
            />
          ))}
        </Dots>
      </Container>
    </Section>
  );
};

export default Testimonials;
