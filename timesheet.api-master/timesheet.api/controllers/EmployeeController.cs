using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using timesheet.business;
using timesheet.data;

namespace timesheet.api.controllers
{
    [Route("api/v1/employee")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        //private readonly EmployeeService employeeService;

        //public EmployeeController()
        //{
        //    this.employeeService = employeeService;
        //}
        public TimesheetDb db { get; }
        public EmployeeController(TimesheetDb dbContext)
        {
            this.db = dbContext;
        }
        [HttpGet("getall")]
        public IActionResult GetAll(string text)
        {
            var items = db.Employees.ToList();//this.employeeService.GetEmployees();
            return new ObjectResult(items);
        }  
        

        }
}