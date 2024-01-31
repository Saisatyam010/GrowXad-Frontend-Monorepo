import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import "./ApiPublisher.css";

const ApiPublisher = () => {
  const [latestToken, setLatestToken] = useState(null);
  const [tokens, setTokens] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tokensPerPage = 10; // Adjust the number of tokens per page as needed

  const generateToken = () => {
    const randomBytes = crypto.getRandomValues(new Uint8Array(16));
    const token = Array.from(randomBytes)
      .map((demo) => demo.toString(16).padStart(2, '0'))
      .join('');
    const currentDate = getCurrentDate();
    const newToken = `${token}`;
    setLatestToken(newToken);
    setTokens((prevTokens) => [...prevTokens, newToken]);
  };

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleString();
  };

  const totalPages = Math.ceil(tokens.length / tokensPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handleClick(i)}>{i}</button>
        </li>
      );
    }
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers}
        </ul>
      </nav>
    );
  };

  const indexOfLastToken = currentPage * tokensPerPage;
  const indexOfFirstToken = indexOfLastToken - tokensPerPage;
  const currentTokens = tokens.slice(indexOfFirstToken, indexOfLastToken);

  return (
    <>
      <Container fluid className='bg-[#ccc] p-1'>
        <Container className='bg-white p-3'>
          <div>
            <h4 className='font-bold'>Current API tokens</h4>
          </div>
          <div className='flex row gap-3 justify-center space-x-4 align-items-center'>
            <div className='rk_api_token-br only-latest-token col-md-4'>
              {latestToken && (
                <ul className='m-0 p-0'>
                  <li className='list-item d-flex justify-content-between align-items-center'>
                    <span>{latestToken}</span>
                  </li>
                </ul>
              )}
            </div>
            <div className='col-md-3 m-0 p-0 flex  justify-center md:justify-start lg:justify-start'>
              <button className='bg-lime-600 px-10 py-2' onClick={generateToken}>Generate Token</button>
            </div>
          </div>
          <div className='mt-5 d-flex row justify-content-center'>
            <div className='col-md-3'>
              <a className='decoration-dotted hover:decoration-dotted hover:decoration-black decoration-black hover:text-gray-600 text-gray-600 text-[1.2rem]' href="#">Developer API documentation</a>
            </div>
            <div className='col-md-3'>
              <span>See guide to API in </span>
              <a className='decoration-dotted hover:decoration-dotted hover:decoration-black decoration-black hover:text-gray-600 text-gray-600 text-[1.2rem]' href="#">our Help Center</a>
            </div>
          </div>
        </Container>

        <Container className='bg-white mt-3 p-3'>
          <div>
            <h4 className='font-bold'>Inactive tokens</h4>
          </div>
          <div>
            <ul className="list-group">
              {currentTokens.length > 0 && (
                <ul>
                  <li className='list-header border-b-2 font-bold d-flex justify-content-between align-items-center'>
                    <span>Tokens</span>
                    <span className='hidden md:block lg:block'>Date</span>
                  </li>
                  {currentTokens.map((token, index) => (
                    <li className='list-item d-flex border-b-2 mb-2 mt-2 justify-content-between align-items-center' key={index}>
                      <span className='hidden md:block lg:block'>{token}</span>
                      <span className='hidden md:block lg:block'>{getCurrentDate()}</span>
                      <div className='md:hidden lg:hidden display-block'>
                        <div className='bg-slate-200 mb-1'>{token}</div>
                        <div className='bg-slate-100 w-[5.5rem]' >{getCurrentDate()}</div>
                        </div>
                    </li>
                  ))}
                </ul>
              )}
            </ul>
            {renderPagination()}
          </div>
        </Container>
      </Container>
    </>
  );
};

export default ApiPublisher;
