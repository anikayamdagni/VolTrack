insert into Faction (Faction) values ('Neon')
insert into Faction (Faction) values ('Helium')
insert into Faction (Faction) values ('Krypton')
insert into Faction (Faction) values ('Xenon')

insert into Location (Location) values ('FCMS')
insert into Location (Location) values ('FSMS')

insert into Volunteer (FirstName, LastName, Email, CellPhone, FactionID, CreatedBy, CreatedOn) 
values ('Anika', 'Yamdagni', 'anika.yamdagni@gmail.com', '832-997-8118', 3, 'Anika', GetDate())

insert into Volunteer (FirstName, LastName, Email, CellPhone, FactionID, CreatedBy, CreatedOn) 
values ('Arul', 'Yamdagni', 'arul.yamdagni@gmail.com', '832-997-7881', 4, 'Anika', GetDate())

insert into Volunteer (FirstName, LastName, Email, CellPhone, FactionID, CreatedBy, CreatedOn) 
values ('Anisha', 'Parsan', 'arul.yamdagni@gmail.com', '832-997-7881', 4, 'Anika', GetDate())

insert into Volunteer (FirstName, LastName, Email, CellPhone, FactionID, CreatedBy, CreatedOn) 
values ('Maumita', 'Sadhukhan', 'arul.yamdagni@gmail.com', '832-997-7881', 1, 'Anika', GetDate())

Select * from Volunteer
where FactionID = 4

Create View MembersList
AS
Select v.FirstName, v.LastName, f.Faction from Volunteer v
inner join Faction f on v.FactionID = f.FactionID


Select * from MembersList



Create Procedure AddSession
(
@LocationID tinyint,
@VolunteerID smallint,
@SessionDate Datetime,
@Description Varchar(1000),
@Suggestion Varchar(1000),
@CreatedBy Varchar(50)
)
AS
BEGIN
	Declare @SessionID Int

	Begin Try
		insert into Sessions (LocationID, VolunteerID, SessionDate, Description, Suggestion, CreatedBy) 
		Select @LocationID, @VolunteerID,@SessionDate, @Description, @Suggestion, @CreatedBy

		SELECT @SessionID = SCOPE_IDENTITY()

		RETURN @SessionID 

	End Try
	Begin Catch
		RaisError('Failed to save session. Try again.', 16, 1, 0) 
		RETURN

	End Catch
END 

Create Procedure DeleteSession
(
@SessionID int
)
AS
BEGIN

	DELETE Sessions WHERE SessionID = @SessionID 

END 



CREATE PROCEDURE UpdateSession
(
@SessionID Int,
@LocationID tinyint,
@VolunteerID smallint,
@SessionDate Datetime,
@Description Varchar(1000),
@Suggestion Varchar(1000),
@ModifiedBy Varchar(50)
)
AS
BEGIN

	IF ( (SELECT COUNT(*) FROM Sessions WHERE SessionID = @SessionID) > 0 ) 
	BEGIN
		
			UPDATE Sessions  
				SET LocationID  = @LocationID,
					VolunteerID  = @VolunteerID,
					SessionDate = @SessionDate,
					Description = @Description,
					Suggestion = @Suggestion,
					ModifiedBy = @ModifiedBy,
					ModifiedOn = GetDate()
			 WHERE SessionID = @SessionID
						
	END 
	ELSE 
		RaisError('Session not found.', 16, 1, 0) 


END 



Exec AddSession 1, 1, '12/07/2021', 'Helped with Database Learning', ' Should have learned earlier', 'Sanjeev'


Select * from Sessions


Exec DeleteSession 1
