import React from 'react'

const TipsAndTricks = () => {
  return (
    <>
    <div className='tip-container'>
        <div className='tip-area'>
            <h1 className='tip-heading'>1. Use alternative travel methods</h1>
            <p className='tip-text'>
                By travelling less by car, you will be contributing less to carbon dioxide emmissions.
                Use alternative methods of travel such as bike, public transport, or simply walking.
            </p> 
        </div>
        <img className='tip-image' src='https://images.unsplash.com/photo-1657953686867-8ab79dcdd43b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80' />
    </div>

    <div className='tip-container'>
        <div className='tip-area'>
            <h1 className='tip-heading'>2. Eat a balanced diet</h1>
            <p className='tip-text'>
                By eating a more balanced diet with meat in moderation, you will be contributing less to emmissions from livestock.
                Try to incorporate more vegetables into your meals rather than relying solely on meat.
            </p> 
        </div>
        <img className='tip-image' src='https://images.unsplash.com/photo-1568625365131-079e026a927d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80' />
    </div>

    <div className='tip-container'>
        <div className='tip-area'>
            <h1 className='tip-heading'>3. Grow plants</h1>
            <p className='tip-text'>
                Plants breath in carbon dioxide and breath out oxygen just as we do the inverse.
                So, by growing plants around the house or outside in your garden you can help to reduce the amount of carbon dioxide in the atmosphere. 
            </p> 
        </div>
        <img className='tip-image' src='https://images.unsplash.com/photo-1444393299901-d5270ace5365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80' />
    </div>
    </>
  )
}

export default TipsAndTricks