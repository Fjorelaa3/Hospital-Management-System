
using Clinic_Management_back.Utility;
using IService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using Shared.DTO;
using Shared.ResponseFeatures;

namespace Clinic_Management_back.Controllers;

[Route("api/menu")]
[ApiController]

public class ApplicationMenuController : ControllerBase
{
    private readonly IServiceManager _service;

    public ApplicationMenuController(IServiceManager service)
    {
        _service = service;
    }

    [HttpGet()]
    public async Task<IActionResult> GetMenu()
    {
        var userRole = ClaimsUtility.ReadCurrentUserRole(User.Claims);


        var result = await _service.MenuService.GetMenuByRole(userRole);

        return Ok(result);
    }

}
