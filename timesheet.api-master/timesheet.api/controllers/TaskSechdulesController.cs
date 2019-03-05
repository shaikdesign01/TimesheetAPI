using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using timesheet.data;
using timesheet.business;
using timesheet.model;
using Microsoft.EntityFrameworkCore;

namespace timesheet.api.controllers
{
    [Route("api/v1/TaskSechdules")]
    [ApiController]
    public class TaskSechdulesController : ControllerBase
    {
        public TimesheetDb db { get; }
        public TaskSechdulesController(TimesheetDb dbContext)
        {
            this.db = dbContext;
        }
        [HttpGet("getallTaskSechdules")]
        public IActionResult GetAll(string text)
        {
            var items = db.TaskSechdule.ToList();//this.employeeService.GetEmployees();
            return new ObjectResult(items);
        }
        [HttpGet("GetEmpid/{id}")]
        public IEnumerable<TaskSechdule> GetEmployeeById(int id)
        {
            var items = db.TaskSechdule.Where(t=>t.EmployeeId==id).ToList();//this.employeeService.GetEmployees();
            return items;
        }
        [HttpPost("CreateTask")]
        public void  PostOrder(TaskSechdule tasksechedule)
        {
            try
            {
                //TaskSechdule table
               
                    if (tasksechedule.TasksSecheduleId == 0)

                        db.TaskSechdule.Add(tasksechedule);
                    else
                        db.Entry(tasksechedule).State = EntityState.Modified;
                
                db.SaveChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

    }
}