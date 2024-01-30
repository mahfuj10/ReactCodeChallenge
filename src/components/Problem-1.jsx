import React, {useState} from 'react';

const Problem1 = () => {

    const [tasks, setTasks] = useState([])
    const [taskName, setTaskName] = useState('');
    const [taskStatus, setTaskStatus] = useState('');
    const [show, setShow] = useState('all');

    const handleClick = (val) =>{
        setShow(val);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newTask = { name: taskName, status: taskStatus };
    
        setTasks((prevTasks) => [...prevTasks, newTask]);
    
        setTaskName('');
        setTaskStatus('');
    };

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form  className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input 
                                onChange={(e) => setTaskName(e.target.value)} 
                                value={taskName}
                                type="text" 
                                className="form-control" 
                                placeholder="Name"
                            />
                        </div>
                        <div className="col-auto">
                            <input 
                                onChange={(e) => setTaskStatus(e.target.value)} 
                                value={taskStatus}
                                type="text" 
                                className="form-control" 
                                placeholder="Status"
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                          { 
                            tasks.filter(task => {
                                if (show === 'active') {
                                  return task.status === 'Active';
                                } else if (show === 'completed') {
                                  return task.status === 'Completed';
                                }
                                return true;
                            }).sort((a, b) => {
                               const order = {
                                 'Active': 1,
                                 'Completed': 2,
                               };
                             
                               const statusOrderA = order[a.status] || 3;
                               const statusOrderB = order[b.status] || 3;
                             
                               return statusOrderA - statusOrderB;
                             })
                           .map((task, index) => (
                             <tr key={index}>
                               <td>{task.name}</td>
                               <td>{task.status}</td>
                             </tr>
                           ))
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;