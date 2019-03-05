using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace timesheet.model
{
    public class TaskSechdule
    {
       [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
       [Key]
        public int TasksSecheduleId { get; set; }
        
        //[StringLength(255)]
        //[Required]
        public int Sunday { get; set; }
        public int Monday { get; set; }
        public int Tuesday { get; set; }
        public int Wednesday { get; set; }
        public int Thursday { get; set; }
        public int Friday { get; set; }
        public int Saturday { get; set; }

        public int EmployeeId { get; set; }

       // public int TaskId { get; set; }
        public string TaskName { get; set; }

    }
}
