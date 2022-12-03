import "./taskAssignment.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import userdata from "./tempData2.json";
import tasks from "./tempData.json";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import "../../Tool/tool.css";

// import BootstrapTable from 'react-bootstrap-table-next';
// import cellEditFactory,{Type} from 'react-bootstrap-table2-editor'
////////////////////////////////////////////////

const TaskAssignment = () => {
  const [users, setUsers] = useState(userdata.data);
  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(users);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setUsers(tempData);
  };
  const [task, setTask] = useState(tasks.data);
  const handleDragEnd2 = (e) => {
    if (!e.destination) return;
    let tempData2 = Array.from(task);
    let [source_data] = tempData2.splice(e.source.index, 1);
    tempData2.splice(e.destination.index, 0, source_data);
    setTask(tempData2);
  };
  const [showtab, setShowtab] = useState(1);

  const handletab = (e) => {
    setShowtab(e);
  };
  return (
    <div className="tool">
      <Sidebar />
      <div className="toolContainer">
        <Navbar pageTitle="Task Assignment" />
        <div className="content">
          <div className="TA mt-4">
            <React.Fragment>
              <ul class="nav nav-pills mb-3 mt-1" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    className={showtab === 2 ? "nav-link active" : "nav-link"}
                    onClick={() => handletab(2)}
                  >
                    Create Task
                  </button>
                </li>
              </ul>

              <div class="tab-content text-dark" id="pills-tabContent">
                <div
                  className={
                    showtab === 2
                      ? "tab-pane fade show active"
                      : "tab-pane fade show"
                  }
                >
                  <div class="row">
                    <div class="table-responsive col-md-6">
                      <DragDropContext onDragEnd={handleDragEnd}>
                        <table
                          className="table borderd"
                          style={{ height: "50%" }}
                        >
                          <thead>
                            <tr>
                              <th style={{ color: "black" }} />
                              <th style={{ color: "black" }}>ID</th>
                              <th style={{ color: "black" }}>Name</th>
                            </tr>
                          </thead>
                          <Droppable droppableId="droppable-1">
                            {(provider) => (
                              <tbody
                                className="text-capitalize"
                                ref={provider.innerRef}
                                {...provider.droppableProps}
                              >
                                {users?.map((user, index) => (
                                  <Draggable
                                    key={user.id}
                                    draggableId={user.id}
                                    index={index}
                                  >
                                    {(provider) => (
                                      <tr
                                        {...provider.draggableProps}
                                        ref={provider.innerRef}
                                      >
                                        <td {...provider.dragHandleProps}>
                                          {" "}
                                          ={" "}
                                        </td>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                      </tr>
                                    )}
                                  </Draggable>
                                ))}
                                {provider.placeholder}
                              </tbody>
                            )}
                          </Droppable>
                        </table>
                      </DragDropContext>
                    </div>
                    <div class="table-responsive col-md-6 ">
                      <DragDropContext onDragEnd={handleDragEnd2}>
                        <table
                          className="table borderd"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th style={{ color: "black" }} />
                              <th style={{ color: "black" }}>Week 1</th>
                              <th style={{ color: "black" }}>Week 2</th>
                              <th style={{ color: "black" }}>Week 3</th>
                              <th style={{ color: "black" }}>Week 4</th>
                            </tr>
                          </thead>
                          <Droppable droppableId="droppable-1">
                            {(provider) => (
                              <tbody
                                className="text-capitalize"
                                ref={provider.innerRef}
                                {...provider.droppableProps}
                              >
                                {task?.map((task, index) => (
                                  <Draggable
                                    key={task.week1}
                                    draggableId={task.week1}
                                    index={index}
                                  >
                                    {(provider) => (
                                      <tr
                                        {...provider.draggableProps}
                                        ref={provider.innerRef}
                                      >
                                        <td {...provider.dragHandleProps}>
                                          {" "}
                                          ={" "}
                                        </td>
                                        <td>{task.week1}</td>
                                        <td>{task.week2}</td>
                                        <td>{task.week3}</td>
                                        <td>{task.week4}</td>
                                      </tr>
                                    )}
                                  </Draggable>
                                ))}
                                {provider.placeholder}
                              </tbody>
                            )}
                          </Droppable>
                        </table>
                      </DragDropContext>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskAssignment;
