﻿using System;
using System.Linq;
using System.Threading.Tasks;
using Mapper_Api.Models;
using Mapper_Api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Mapper_Api.Controllers
{
    public class GolfCourseController : Controller
    {
        private readonly GolfCourseService service;

        public GolfCourseController(GolfCourseService service)
        {
            this.service = service;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCourse(string courseName)
        {
            var golfCourse = await service.CreateGolfCourse(courseName);
            return Ok(golfCourse);
        }

        [HttpPost]
        public async Task<IActionResult> AddPolygon(string geoJson, CoursePolygon.PolygonTypes type, Guid courseId)
        {
            var coursePoly = await service.CreatePolygon(courseId, type, geoJson);
            return Ok(coursePoly);
        }

        [HttpGet]
        public async Task<IActionResult> GetCourses()
        {
            var golfCourses = service.GetGolfCourses();
            return Ok(await golfCourses.ToListAsync());
        }

        [HttpGet]
        public async Task<IActionResult> GetPolygons(Guid? courseId = null)
        {
            if (courseId == null)
            {
                return BadRequest("Requires course Id");
            }
            var polyList = Queryable.Where(service.GetGolfPolygons(), p => p.CourseId == courseId);
            
            return Ok(await polyList.ToListAsync());
        }
    }
}