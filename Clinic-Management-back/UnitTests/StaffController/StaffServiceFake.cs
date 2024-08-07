using AutoMapper;
using Entities.Models;
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

namespace UnitTests
{
    internal class StaffServiceFake : IStaffService
    {
        private readonly IRepositoryManager _repositoryManager;
        private readonly IMapper _mapper;

        public StaffServiceFake(IRepositoryManager repositoryManager, IMapper mapper)
        {
            _repositoryManager = repositoryManager;
            _mapper = mapper;
        }

        public async Task<BaseResponse> CreateStaffForService(StaffRequestDTO staffDTO)
        {
            try
            {
                var mapperRequest = new MapperConfiguration(cfg => cfg.CreateMap<StaffRequestDTO, ServiceStaff>()).CreateMapper();
                var serviceStaff = mapperRequest.Map<ServiceStaff>(staffDTO);
                _repositoryManager.ServiceStaffRepository.CreateRecord(serviceStaff);

                return new BaseResponse
                {
                    Result = true,
                    Message = "Staff created successfully",
                    StatusCode = 200
                };
            }
            catch (Exception ex)
            {
                return new BaseResponse
                {
                    Result = false,
                    Message = ex.Message,
                    StatusCode = 400
                };
            }
        }

        public async Task<IEnumerable<StaffResponseDTO>> GetAllStaffs()
        {
            var serviceStaffs = _repositoryManager.ServiceStaffRepository.GetAllRecords();
            var staffResponse = _mapper.Map<IEnumerable<StaffResponseDTO>>(serviceStaffs.Result);

            return staffResponse;
        }

        public async Task<StaffResponseDTO> GetStaffById(int id)
        {
            var existingStaff = _repositoryManager.ServiceStaffRepository.GetRecordByIdAsync(id);
            var staffResponse = _mapper.Map<StaffResponseDTO>(existingStaff.Result);

            return staffResponse;
        }

        public Task<BaseResponse> UpdateStaff(int id, StaffRequestDTO staffDTO)
        {
            throw new NotImplementedException();
        }

        public Task<BaseResponse> DeleteStaff(int id)
        {
            throw new NotImplementedException();
        }
    }
}

