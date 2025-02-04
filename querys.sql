
-- Saber cuántos cursos se tienen por modalidad
SELECT m.name AS modalidad, COUNT(c.id) AS total_cursos
FROM Course c
JOIN Modality m ON c.modality_id = m.id
GROUP BY m.name;


-- Saber la cantidad de estudiantes por estado de matrícula en cada curso
SELECT c.name AS curso, i.name AS estado_matricula, COUNT(uc.user_id) AS total_estudiantes
FROM UserCourse uc
JOIN Course c ON uc.course_id = c.id
JOIN InscriptionStatus i ON uc.inscription_status_id = i.id
GROUP BY c.name, i.name;

-- Saber el promedio de estudiantes registrados en el sistema, el curso con más inscriptos y el curso con menos inscriptos.
WITH student_counts AS (
    SELECT c.name AS curso, COUNT(uc.user_id) AS total_estudiantes
    FROM UserCourse uc
    JOIN Course c ON uc.course_id = c.id
    GROUP BY c.name
)
SELECT 
    (SELECT AVG(total_estudiantes) FROM student_counts) AS promedio_estudiantes,
    (SELECT curso FROM student_counts ORDER BY total_estudiantes DESC LIMIT 1) AS curso_mas_inscritos,
    (SELECT curso FROM student_counts ORDER BY total_estudiantes ASC LIMIT 1) AS curso_menos_inscritos;
