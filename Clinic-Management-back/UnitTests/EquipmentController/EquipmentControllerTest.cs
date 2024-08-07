using Clinic_Management_back.Controllers;
using IService;
using IRepository;
using AutoMapper;
using Entities.Models;
using Shared.DTO.Response;
using Microsoft.AspNetCore.Mvc;
using Shared.DTO.Request;

namespace UnitTests
{
    public class EquipmentControllerTest
    {
        private readonly EquipmentController _controller;
        private readonly IServiceManager _serviceManager;
        private readonly IRepositoryManager _repositoryManager;
        private readonly IMapper _mapper;

        public EquipmentControllerTest()
        {
            _mapper = new MapperConfiguration(cfg => cfg.CreateMap<Equipment, EquipmentResponseDTO>()).CreateMapper();
            _repositoryManager = new RepositoryManagerFake();
            _serviceManager = new ServiceManagerFake(_repositoryManager,_mapper);
            _controller = new EquipmentController(_serviceManager);
        }

        [Fact]
        public void Create_WhenCalled_ReturnsOKResult()
        {
            //Arrange
            EquipmentRequestDTO newEquipment = new EquipmentRequestDTO() {Name = "Ultrasound", ProducedAt = DateTime.UtcNow};

            // Act
            var okResult = _controller.CreateEquipment(newEquipment).Result;
            
            // Assert
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
        }

        [Fact]
        public void GetAllEquipments_WhenCalled_ReturnsOKResult()
        {
            // Act
            var okResult = _controller.GetAllEquipments().Result;

            // Assert
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
        }

        [Fact]
        public void GetAllEquipments_WhenCalled_ReturnsAllItems()
        {
            // Act 
            var okResult = _controller.GetAllEquipments().Result as OkObjectResult;

            // Assert
            var items = Assert.IsType<List<EquipmentResponseDTO>>(okResult.Value);
            Assert.Equal(3, items.Count);
        }

        [Fact]
        public void GetById_ExistingIdPassed_ReturnsOkResult()
        {
            // Arrange
            var id = 2;

            // Act
            var okResult = _controller.GetEquipmentById(id).Result;

            // Assert
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
        }

        [Fact]
        public void GetById_ExistingIdPassed_ReturnsRightItem()
        {
            // Arrange
            var id = 2;

            // Act
            var okResult = _controller.GetEquipmentById(id).Result as OkObjectResult;

            // Assert
            Assert.IsType<EquipmentResponseDTO>(okResult.Value);
            Assert.Equal(id, (okResult.Value as EquipmentResponseDTO).Id);
        }

        [Fact]
        public void GetById_UnknownIdPassed_ReturnsNull()
        {
            // Arrange
            var id = 0;

            // Act
            var okResult = _controller.GetEquipmentById(id).Result as OkObjectResult;
            var item = okResult.Value;
        
            // Assert
            Assert.Null(item);
        }
    }
}