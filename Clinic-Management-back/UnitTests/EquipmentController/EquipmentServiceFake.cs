using IRepository;
using IService;
using Shared.DTO.Request;
using Shared.DTO.Response;
using Shared.ResponseFeatures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Entities.Models;
using Exceptions;

namespace UnitTests
{
    internal class EquipmentServiceFake : IEquipmentService
    {
        private readonly IRepositoryManager _repositoryManager;
        private readonly IMapper _mapper;

        public EquipmentServiceFake(IRepositoryManager repositoryManager, IMapper mapper) 
        {
            _repositoryManager = repositoryManager;
            _mapper = mapper;
        }

        public async Task<BaseResponse> CreateEquipment(EquipmentRequestDTO equipmentDTO)
        {   
            var mapperRequest =  new MapperConfiguration(cfg => cfg.CreateMap<EquipmentRequestDTO, Equipment>()).CreateMapper();

            var equipment = mapperRequest.Map<Equipment>(equipmentDTO);
            _repositoryManager.EquipmentRepository.CreateRecord(equipment);

            return new BaseResponse
            {
                Result = true,
                Message = "The device has been added",
                StatusCode = 200
            };
        }

        public Task<BaseResponse> DeleteEquipment(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<EquipmentResponseDTO>> GetAllEquipments()
        {
            var equipments = _repositoryManager.EquipmentRepository.GetAllRecords();
            var equipmentResponse = _mapper.Map<IEnumerable<EquipmentResponseDTO>>(equipments.Result);

            return equipmentResponse;
        }

        public async Task<EquipmentResponseDTO> GetEquipmentById(int id)
        {
            var existingEquipment = _repositoryManager.EquipmentRepository.GetRecordByIdAsync(id);
            var equipmentResponse = _mapper.Map<EquipmentResponseDTO>(existingEquipment.Result);

            return equipmentResponse;
        }

        public Task<BaseResponse> UpdateEquipment(int id, EquipmentRequestDTO equipmentDTO)
        {
            throw new NotImplementedException();
        }
    }
}
