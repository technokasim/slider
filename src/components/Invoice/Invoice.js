import React from 'react';
import { render } from 'react-dom';
import Logo from './InvoiceLogo.png';
import './Invoice.css';
import ContentCutIcon from '@mui/icons-material/ContentCut';

const Invoice = () => (
  <section className="container">
        {/* <div className="h-100 d-flex align-items-center justify-content-center"> */}
        <div>
            <div >
                <img src={Logo} alt="Logo" style={{width:'100%'}}/>
            </div>
        </div>

        <div style={{marginTop:'240px'}}>

        </div>

        <div>
            <hr/>
            <ContentCutIcon />
        </div>

        <div className="row invoice-head mt-5">
                <div className="col-md-4">
                    <b>Bill Information</b>
                </div>
                <div className="col-md-4">
                  
                </div>
                <div className="col-md-4">
                    <b className="invoice-arabic-text">تفاصىل الفاتورة</b>
                </div>
        </div>
        <div className="row">
                <div className="col-md-4">
                    <b>Full Name</b>
                </div>
                <div className="col-md-4">
                    <center><span>Abdullaah Khalilullah</span></center>
                </div>
                <div className="col-md-4">
                    <b className="invoice-arabic-text">الاسم بالكامل</b>
                </div>
        </div>
        <div className="row">
                <div className="col-md-4">
                    <b>Location</b>
                </div>
                <div className="col-md-4">
                    <center><span>IND4 Head Office</span></center>
                </div>
                <div className="col-md-4">
                    <b className="invoice-arabic-text">الموقع</b>
                </div>
        </div>
        <div className="row">
                <div className="col-md-4">
                    <b>Country</b>
                </div>
                <div className="col-md-4">
                    <center><span>UAE</span></center>
                </div>
                <div className="col-md-4">
                    <b className="invoice-arabic-text">البلد</b>
                </div>
        </div>
        <div className="row">
                <div className="col-md-4">
                    <b>Phone Number</b>
                </div>
                <div className="col-md-4">
                    <center><span>+971 121478913</span></center>
                </div>
                <div className="col-md-4">
                    <b className="invoice-arabic-text">رقم الهاتف</b>
                </div>
        </div>

        <div className="row invoice-head mt-4">
                <div className="col-md-4">
                    <b>Bill Information</b>
                </div>
                <div className="col-md-4">
                  
                </div>
                <div className="col-md-4">
                    <b className="invoice-arabic-text">تفاصىل الفاتورة</b>
                </div>
        </div>
        <div className="row">
            
                    <div className="col-md-2">
                        <span>Shipper/الشاحن</span>
                    </div>
                    <div className="col-md-4">
                        <span>answer</span>
                    </div>
                    <div className="col-md-3">
                        <span>Consignee/المرسل إلية</span>
                    </div>
                    <div className="col-md-3">
                        <span>answer</span>
                    </div>
        </div>
        <div className="row">
                    <div className="col-md-2">
                        <span>Origin/اصل</span>
                    </div>
                    <div className="col-md-4">
                        <span>answer</span>
                    </div>
                    <div className="col-md-3">
                        <span>Destination/الوجهة</span>
                    </div>
                    <div className="col-md-3">
                        <span>answer</span>
                    </div>
        </div>
        <div className="row">
                    <div className="col-md-2">
                        <span>Carier Name/اسم الناقل</span>
                    </div>
                    <div className="col-md-4">
                        <span>answer</span>
                    </div>
                    <div className="col-md-3">
                        <span>Booking Num/رقم الحجز</span>
                    </div>
                    <div className="col-md-3">
                        <span>answer</span>
                    </div>
        </div>
        <div className="row">
                    <div className="col-md-2">
                        <span>Sailing Date/تاريخ الإبحار</span>
                    </div>
                    <div className="col-md-4">
                        <span>answer</span>
                    </div>
                    <div className="col-md-3">
                        <span>Contatiner/حاوية</span>
                    </div>
                    <div className="col-md-3">
                        <span>answer</span>
                    </div>
        </div>
        

        <table class="table mt-5">
        <thead className="invoice-table-head mt-5">
            <tr className="arabic-head">
            <th scope="col">وصف</th>
            <th scope="col">مزاد علني</th>
            <th scope="col">سعر</th>
            <th scope="col">سعر</th>
            <th scope="col">توصيل</th>
            <th scope="col">شحن</th>
            <th scope="col">رسوم التاجر</th>
            <th scope="col">تخزين</th>
            <th scope="col">رسوم مؤجلة</th>
            <th scope="col">رسوم EV</th>
            <th scope="col">أضف خدمة</th>
            <th scope="col">المجموع</th>
            </tr>
            <tr className="english-head">
            <th scope="col">Description</th>
            <th scope="col">Auction</th>
            <th scope="col">Price</th>
            <th scope="col">Other</th>
            <th scope="col">Delivery</th>
            <th scope="col">Shipping</th>
            <th scope="col">Dealer Fee</th>
            <th scope="col">Storage</th>
            <th scope="col">Late Fee</th>
            <th scope="col">EV Fee</th>
            <th scope="col">Add Service</th>
            <th scope="col">Total</th>
            </tr>
        </thead>
 
    <tr>
      <td className="inv-right-border">1</td>
      <td className="inv-right-border">Mark</td>
      <td className="inv-right-border">Otto</td>
      <td className="inv-right-border">@mdo</td>
      <td className="inv-right-border">Mark</td>
      <td className="inv-right-border">Otto</td>
      <td className="inv-right-border">@mdo</td>
      <td className="inv-right-border">Mark</td>
      <td className="inv-right-border">Otto</td>
      <td className="inv-right-border">@mdo</td>
      <td className="inv-right-border">@mdo</td>
      <td >@mdo</td>
    </tr>
    <tr>
      <td className="inv-right-border">1</td>
      <td className="inv-right-border">Mark</td>
      <td className="inv-right-border">Otto</td>
      <td className="inv-right-border">@mdo</td>
      <td className="inv-right-border">Mark</td>
      <td className="inv-right-border">Otto</td>
      <td className="inv-right-border">@mdo</td>
      <td className="inv-right-border">Mark</td>
      <td className="inv-right-border">Otto</td>
      <td className="inv-right-border">@mdo</td>
      <td className="inv-right-border">@mdo</td>
      <td >@mdo</td>
    </tr>
    <tr>
      <td className="inv-right-border">1</td>
      <td className="inv-right-border">Mark</td>
      <td className="inv-right-border">Otto</td>
      <td className="inv-right-border">@mdo</td>
      <td className="inv-right-border">Mark</td>
      <td className="inv-right-border">Otto</td>
      <td className="inv-right-border">@mdo</td>
      <td className="inv-right-border">Mark</td>
      <td className="inv-right-border">Otto</td>
      <td className="inv-right-border">@mdo</td>
      <td className="inv-right-border">@mdo</td>
      <td >@mdo</td>
    </tr>
    <tr className="inv-last-table">
      <td className="inv-right-border"></td>
      <td className="inv-right-border"></td>
      <td className="inv-right-border"></td>
      <td className="inv-right-border"></td>
      <td className="inv-right-border"></td>
      <td className="inv-right-border"></td>
      <td className="inv-right-border"></td>
      <td className="inv-right-border"></td>
      <td className="inv-right-border"></td>
      <td className="inv-right-border"></td>
      <td className="inv-right-border"></td>
      
    
    </tr>
   

  
    

</table>

    <div className="row p-2" id="title">
      <div className="col-sm-6">
        <span className="badge badge-secondary mr-4">Draft</span>
        <h2>Invoice</h2>
      </div>
    </div>

    <section className="p-2 border-bottom">
      <div className="row" id="">
        <div className="col-sm-4">
          <span className="font-weight-bold">Invoice No</span> : 1
        </div>
          <div className="col-sm-4">
          <span className="font-weight-bold">Date</span> : 10-01-2018
        </div>
          <div className="col-sm-4">
          <span className="font-weight-bold">Due</span> : 10-01-2018
        </div>
      </div>
    </section>

    <section className="border-bottom p-2">
      <div className="row p-2">
        <div className="col-sm-12">
          <span className="font-weight-bold">From:</span> <br />
          <span className="font-weight-light text-justify">
            Eco Haya <br />
            #944/945,
          4th Cross, 9th Main, <br />
            Vijaya Bank Layout,
          Bannerghatta Road, <br />
            Bangalore <br />
            Pincode - 560011
        </span>
        </div>
      </div>

      <div className="row p-2">
        <div className="col-sm-12">
          <span className="font-weight-bold">To:</span> <br />
          <span className="font-weight-light text-justify">
            Customer Inc. <br />
            #1,
          8th Cross, I don't know road <br />
            Area I don't care,
          Locality Unknown, <br />
            City <br />
            Pincode - 890234
        </span>
        </div>
      </div>
    </section>


    <section className="border-bottom p2">
      <div className="row">
        <div className="col-sm-12">
          <table class="table table-sm">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Items</th>
                <th scope="col">Description</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Line Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Accommodation (Single)</td>
                <td></td>
                <td>1</td>
                <td>&#8377; 1499</td>
                <td>&#8377; 1499</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="mt-4">
      <div className="row">
        <div className="col-sm-6 offset-6">
          <div className="row border-bottom">
            <div className="col-auto mr-auto">
              <p className="font-weight-light">Sub Total</p>
            </div>
            <div className="col-auto">
              &#8377; 1499
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-6">
          <div className="row border-bottom">
            <div className="col-auto mr-auto">
              <p className="font-weight-light">CGST @6%</p>
            </div>
            <div className="col-auto">
              &#8377; 59.54
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-6">
          <div className="row border-bottom">
            <div className="col-auto mr-auto">
              <p className="font-weight-light">SGST @6%</p>
            </div>
            <div className="col-auto">
              &#8377; 59.54
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-6">
          <div className="row">
            <div className="col-auto mr-auto">
              <p className="font-weight-bold">Total (INR)</p>
            </div>
            <div className="col-auto">
              <span className="font-weight-bold">
                &#8377; 1618.04
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-5">
      <div className="border-top row">
        <div className="col">
          <p className="text-center">This is a computer generate invoice.</p>
        </div>
      </div>
    </section>

  </section>
);

export default Invoice;



