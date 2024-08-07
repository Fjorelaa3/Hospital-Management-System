using AutoMapper;
using Clinic_Management_back.Controllers;
using IRepository;
using IService;
using Microsoft.AspNetCore.Mvc;
using Shared.DTO.Request;
using Shared.DTO.Response;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnitTests
{
    public class StaffControllerTest
    {
        private readonly StaffController _controller;
        private readonly IServiceManager _serviceManager;
        private readonly IRepositoryManager _repositoryManager;
        private readonly IMapper _mapper;

        public StaffControllerTest()
        {
            _mapper = new MapperConfiguration(cfg => cfg.CreateMap<ServiceStaff, StaffResponseDTO>()
                .ForMember(dest => dest.DoctorFirstName, opt => opt.MapFrom(src => src.Staff.FirstName))
                .ForMember(dest => dest.DoctorLastName, opt => opt.MapFrom(src => src.Staff.LastName))
                .ForMember(dest => dest.ServiceName, opt => opt.MapFrom(src => src.Service.Name))
                .ForMember(dest => dest.StaffSpecialization, opt => opt.MapFrom(src => src.Staff.Specialization))
            ).CreateMapper();

            _repositoryManager = new RepositoryManagerFake();
            _serviceManager = new ServiceManagerFake(_repositoryManager, _mapper);
            _controller = new StaffController(_serviceManager);
        }

        [Fact]
        public void Create_WhenCalled_ReturnsOKResult()
        {
            // Arrange
            StaffRequestDTO newStaff = new StaffRequestDTO() { StaffId = 1, ServiceId = 1 };

            // Act
            var okResult = _controller.CreateStaffForService(newStaff).Result;

            // Assert
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
        }

        [Fact]
        public void GetAllStaffs_WhenCalled_ReturnsOKResult()
        {
            // Act
            var okResult = _controller.GetAllStaffs().Result;

            // Assert
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
        }

        [Fact]
        public void GetAllStaffs_WhenCalled_ReturnsAllItems()
        {
            // Act
            var okResult = _controller.GetAllStaffs().Result as OkObjectResult;

            // Assert
            var items = Assert.IsType<List<StaffResponseDTO>>(okResult.Value);
            Assert.Equal(3, items.Count); 
        }

        [Fact]
        public void GetById_ExistingIdPassed_ReturnsOkResult()
        {
            // Arrange
            var id = 2;

            // Act
            var okResult = _controller.GetStaffById(id).Result;

            // Assert
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
        }

        [Fact]
        public void GetById_ExistingIdPassed_ReturnsRightItem()
        {
            // Arrange
            var id = 2;

            // Act
            var okResult = _controller.GetStaffById(id).Result as OkObjectResult;

            // Assert
            Assert.IsType<StaffResponseDTO>(okResult.Value);
            Assert.Equal(id, (okResult.Value as StaffResponseDTO).Id);
        }

        [Fact]
        public void GetById_UnknownIdPassed_ReturnsNotFoundResult()
        {
            // Arrange
            var id = 99; 

            // Act
            var okResult = _controller.GetStaffById(id).Result as OkObjectResult;

            // Assert
            Assert.Null(okResult.Value);
        }
    }
}
