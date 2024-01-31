import React from 'react'

const CpaForm = () => {
    <div>

    <div className="row py-5 my-md-4 my-3 mx-md-4 mx-2 SSA_CPA_Card2">
        <div className="col-md-10">
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Name*" />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your email*" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Message*" />
                    </div>
                </div>
            </div>
            <div className='pl-4'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    &nbsp; I agree to the Privacy Policy and Terms & Conditions
                </label>
            </div>
        </div>
        <div className="col-md-2 pt-md-0 pt-3">
            <button type="button" class="btn SSA_CPA_Network_button py-2 px-5" style={{ fontSize: '18px' }}>Let's Talk</button>
        </div>
    </div>
</div>
}

export default CpaForm