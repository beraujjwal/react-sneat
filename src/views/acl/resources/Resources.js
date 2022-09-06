import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllResources } from '../../../server/actions/resourceAction';

export default function Resources() {

  const dispatch = useDispatch();

  const { loading, data, error, success } = useSelector(
    (state) => state.resource
  );

  useEffect( () => {
    dispatch(getAllResources()).unwrap();
  }, []);


  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Tables /</span> Resources</h4>

        <div className="card">
          <h5 className="card-header">Resources</h5>
          <div className="table-responsive text-nowrap">
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Status</th>
                  <th width="100">Actions</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                {
                  data?.items && data.items.map((resource) => {
                    return (
                      <tr key={resource.id}>
                        <td><strong>{resource.name}</strong></td>
                        <td>{resource.slug}</td>
                        <td>
                          {(() => {
                            switch(resource.status){
                              case true:
                                return (
                                  <span className="badge bg-label-success me-1">Active</span>
                                )
                              case false:
                                return (
                                  <span class="badge bg-label-warning me-1">Pending</span>
                                )
                              default :
                                return (
                                  <span className="badge bg-label-success me-1">Active</span>
                                )
                            }
                          })()}
                        </td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <Link className="dropdown-item" to="#"><i className="bx bx-edit-alt me-1"></i> Edit</Link>
                              <Link className="dropdown-item" to="#"><i className="bx bx-trash me-1"></i> Delete</Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                }                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}