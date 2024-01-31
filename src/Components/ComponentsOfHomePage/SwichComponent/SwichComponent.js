import React, { useState } from 'react'
import Layout from '../../Layout/Layout';

const SwichComponent = () => {
    const [contentAdvertiser, setContentAdvertiser] = useState(true);
    const [contentPublisher, setContentPublisher] = useState(false);

  return (
    <>
    <Layout>
       <div>
        <div className="container px-5 py-5  my-5" >
            <div className='px-md-5 px-0'>
            <div  class="row mx-md-5 mx-0 justify-content-center" style={{padding:'0px !important',margin:'0px !important',border:'1px solid black',borderRadius:'28px'}}>
    <div className="col-6 text-center " onClick={() => {
  setContentAdvertiser(true);
  setContentPublisher(false);
}}
style={{
    cursor: 'pointer',
    backgroundColor: contentAdvertiser ? 'black' : 'white',
    color: contentAdvertiser ? 'white' : 'black',
    borderTopLeftRadius: '28px',
    borderBottomLeftRadius: '28px',
  }}
  

>
        <div className='py-3' style={{}}>
        <div>Advertisers</div>
        </div>
    </div>
    <div className="col-6 text-center" onClick={() => {
  setContentAdvertiser(false);
  setContentPublisher(true);
}}
style={{cursor:'pointer', backgroundColor: contentPublisher ? 'black' : 'white',color:contentPublisher?'white':'black',borderTopRightRadius:'28px',borderBottomRightRadius:'28px'}}
>
    <div className='py-3' style={{}}>
        <div>Publisher</div>  
        </div>
    </div>
</div>

{contentAdvertiser? <><div className="container pt-5">
    <div className="lorem200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum totam maiores porro nulla? Nesciunt, nobis quas. Ratione ipsa fugit, aspernatur aperiam recusandae repellat id repudiandae placeat quos, expedita alias qui explicabo iste harum doloremque. Obcaecati quo, inventore ipsam aut quaerat maxime placeat dolorum nostrum assumenda eum rerum porro iste beatae quae officiis dolor blanditiis fuga neque reprehenderit? Fugit tempore corrupti laboriosam soluta sequi, delectus reiciendis. Aliquam dicta aperiam unde porro natus facilis necessitatibus! Autem veritatis doloremque, modi numquam inventore, quisquam possimus hic blanditiis, aspernatur suscipit voluptatum repellat impedit dignissimos. Similique nulla sequi corrupti eveniet nesciunt exercitationem harum recusandae in sint, aliquid consequuntur at dignissimos possimus, odit accusantium perspiciatis! Quae tenetur, suscipit similique laudantium recusandae ducimus distinctio? Modi tempore quis veritatis! Aut veniam necessitatibus, animi architecto quasi beatae magnam repellat impedit deleniti maxime recusandae incidunt itaque alias fugit cumque eius a deserunt et voluptatem porro. Nihil incidunt omnis eaque deleniti doloremque quam iusto adipisci expedita id error! Enim nemo nisi veniam deserunt id asperiores itaque ratione debitis fugiat tenetur quae molestias explicabo voluptatem in consequatur consectetur praesentium, adipisci eveniet ducimus iure voluptates alias! Provident doloremque maiores ducimus! Necessitatibus numquam magni nulla, corrupti reprehenderit sint beatae odio natus pariatur accusantium maxime laudantium facere animi quasi sapiente possimus quibusdam, ab dolorum temporibus repudiandae atque vel consequatur. Maxime distinctio molestiae quis. Rerum et iure eaque mollitia voluptatibus. Laborum commodi facere repellat impedit suscipit accusantium non saepe rerum accusamus hic itaque mollitia labore, voluptates quasi nostrum nemo, totam nihil vel tempore nesciunt exercitationem necessitatibus architecto? Illo ullam commodi ipsa suscipit, provident nobis soluta impedit sit similique distinctio maxime ad iusto quasi, alias fuga natus obcaecati corporis reprehenderit enim accusamus temporibus. Libero vel esse quasi officia deserunt rerum laboriosam accusantium commodi dolores asperiores, numquam consequuntur laborum.</div>
</div></>
:<>
<div className="container pt-5">
    <div className="lorem200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a optio corporis dolorum quia cum eveniet, perspiciatis iste accusamus veniam.</div>
</div></>}





            </div>


        </div>
    </div>
    </Layout>
    
    
    </>
  )
}

export default SwichComponent